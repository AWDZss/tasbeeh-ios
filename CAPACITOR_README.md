# تطبيق تسبيح Capacitor

هذا المشروع يحافظ على ملفات الويب الأصلية في الجذر، وينسخها إلى `www` عند تشغيل أوامر البناء.

## Bundle ID

`com.ibrahim.tasbeeh`

## أوامر مفيدة

```bash
npm install
npm run build
npm run serve
npm run cap:sync
```

## البناء عبر Codemagic

ارفع المشروع إلى GitHub، ثم اربطه في Codemagic. قبل بناء نسخة App Store، أضف تكامل App Store Connect واملأ متغير `APP_STORE_APPLE_ID` داخل `codemagic.yaml` أو من إعدادات Codemagic.
