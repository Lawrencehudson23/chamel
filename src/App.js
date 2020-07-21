import React from "react";
import Header from "./components/Header/Header";
import "./App.less";
import { Router } from "@reach/router";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Router>
          <HomePage path="/" />
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
