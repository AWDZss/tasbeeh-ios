import SwiftUI

struct ContentView: View {
    var body: some View {
        TasbeehWebView()
            .ignoresSafeArea()
            .background(Color(red: 0.969, green: 0.957, blue: 0.925))
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
