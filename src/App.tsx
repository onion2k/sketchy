import React, { Suspense } from "react";
import { Router } from "@reach/router";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Sketch from "./Components/Sketch";
import "./App.css";

interface AppState {
  open: boolean;
}

const ExtendedSketch = React.lazy(() => import("./Sketches/extSketch"));
const Grid1 = React.lazy(() => import("./Sketches/Grid1"));
const Lines1 = React.lazy(() => import("./Sketches/Lines1"));
const Lines2 = React.lazy(() => import("./Sketches/Lines2"));
const Lines3 = React.lazy(() => import("./Sketches/Lines3"));
const Continuous1 = React.lazy(() => import("./Sketches/Continuous1"));

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = { open: false };
  }
  componentDidMount() {
    this.setState({ open: true });
  }
  render() {
    const open = this.state.open;
    return (
      <div>
        {/* <div className={`loading ${open ? "open" : ""}`}>
          <div className="left" />
          <div className="right" />
        </div> */}
        <div className="App">
          <Header />
          <div className="App-Sketch">
            <Suspense fallback={<div>Waiting</div>}>
              <Router>
                <Home path="/" />
                <Sketch path="sketch" />
                <ExtendedSketch path="extendedSketch" />
                <Grid1 path="grid1" />
                <Lines1 path="lines1" />
                <Lines2 path="lines2" />
                <Lines3 path="lines3" />
                <Continuous1 path="continuous1" />
              </Router>
            </Suspense>
          </div>
          <div className="App-Controls">Controls</div>
        </div>
      </div>
    );
  }
}

export default App;
