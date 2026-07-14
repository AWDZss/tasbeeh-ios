import { createServer } from "node:http";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import "./sync-web.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webDir = path.join(projectRoot, "www");
const host = "127.0.0.1";
const preferredPort = Number(process.env.PORT || 3000);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".webmanifest", "application/manifest+json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
]);

function resolveRequestPath(url) {
  const parsedUrl = new URL(url, `http://${host}`);
  const decodedPath = decodeURIComponent(parsedUrl.pathname);
  const relativePath = decodedPath === "/" ? "index.html" : decodedPath.replace(/^\/+/, "");
  const resolvedPath = path.resolve(webDir, relativePath);

  if (!resolvedPath.startsWith(webDir)) {
    return null;
  }

  return resolvedPath;
}

function createStaticServer() {
  return createServer(async (request, response) => {
    const filePath = resolveRequestPath(request.url || "/");

    if (!filePath) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    try {
      const fileStat = await stat(filePath);

      if (!fileStat.isFile()) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "Content-Length": fileStat.size,
        "Content-Type": mimeTypes.get(path.extname(filePath)) || "application/octet-stream",
        "Cache-Control": "no-store",
      });
      createReadStream(filePath).pipe(response);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });
}

async function listen(server, port) {
  return new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, host, () => {
      server.off("error", reject);
      resolve(port);
    });
  });
}

async function start() {
  let lastError;

  for (let port = preferredPort; port < preferredPort + 20; port += 1) {
    const server = createStaticServer();

    try {
      await listen(server, port);
      console.log(`Tasbeeh dev server running at http://${host}:${port}/`);
      console.log("Press Ctrl+C to stop.");
      return;
    } catch (error) {
      lastError = error;

      if (error.code !== "EADDRINUSE") {
        throw error;
      }
    }
  }

  throw lastError || new Error("No available port found.");
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
