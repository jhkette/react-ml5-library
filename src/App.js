import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Ml5ImagePage from "./components/Dropzone";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Ml5ImagePage />
      <Footer />
    </div>
  );
}

export default App;
