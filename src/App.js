import React from "react";
import Header from "./components/Header/Header";
import "./App.less";
import { Router } from "@reach/router";
import HomePage from "./components/pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="content">
        <Router>
          <HomePage path="/" />
        </Router>
      </div>
      <footer className="footer">footer</footer>
    </div>
  );
}

export default App;
