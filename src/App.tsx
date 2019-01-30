import React, { Suspense } from "react";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Sketch from "./Components/Sketch";
import "./App.css";

const ExtendedSketch = React.lazy(() => import("./Sketches/extSketch"));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Content">
          <Suspense fallback={<div>Waiting</div>}>
            <Router>
              <Home path="/" />
              <Sketch path="sketch" />
              <ExtendedSketch path="extendedSketch" />
            </Router>
          </Suspense>
        </div>
      </div>
    );
  }
}

export default App;
