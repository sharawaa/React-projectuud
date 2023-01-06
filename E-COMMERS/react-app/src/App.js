import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

// USERS хувьсагч дотор байгаа дата-г ашиглан хэрэглэгч тус бүрийн card "component" үүсгэн хэвлэж гаргана уу.

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
