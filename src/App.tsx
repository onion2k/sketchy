import React, { Suspense } from "react";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Sketch from "./Components/Sketch";
import "./App.css";

const ExtendedSketch = React.lazy(() => import("./Sketches/extSketch"));
const Grid1 = React.lazy(() => import("./Sketches/Grid1"));

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-Sketch">
          <Suspense fallback={<div>Waiting</div>}>
            <Router>
              <Home path="/" />
              <Sketch path="sketch" />
              <ExtendedSketch path="extendedSketch" />
              <Grid1 path="grid1" />
            </Router>
          </Suspense>
        </div>
        <div className="App-Controls">Controls</div>
      </div>
    );
  }
}

export default App;
