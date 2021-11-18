import React from "react";
import "./App.css";
import Ml5ImagePage from "./components/Dropzone";
import Header from "./components/header";
import Footer from "./components/footer";
import Intro from "./components/intro";

function App() {
  return (
    <div className="App">
      
      <div>
      <Header />
      <Intro/>
      <Ml5ImagePage />
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
