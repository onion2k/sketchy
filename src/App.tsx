import React, { Component } from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Sketch from "./Components/Sketch";
import ExtendedSketch from "./Components/extSketch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Content">
          <Router>
            <Home path="/" />
            <Sketch path="sketch" />
            <ExtendedSketch path="extendedSketch" />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
