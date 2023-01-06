import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

// USERS хувьсагч дотор байгаа дата-г ашиглан хэрэглэгч тус бүрийн card "component" үүсгэн хэвлэж гаргана уу.

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      className="App"
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
