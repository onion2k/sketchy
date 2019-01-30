import React, { RefObject } from "react";
import { RouteComponentProps } from "@reach/router";
import "./Sketch.css";

interface SketchProps extends RouteComponentProps {
  props?: any;
  path: string;
}

interface SketchState {
  canvasElementRef: RefObject<HTMLCanvasElement>;
  requestAnimationFrameCancel: any;
}

export default class Sketch extends React.Component<SketchProps, SketchState> {
  private canvasElementRef = React.createRef<HTMLCanvasElement>();

  constructor(props?: any) {
    super(props);
    this.state = {
      canvasElementRef: this.canvasElementRef,
      requestAnimationFrameCancel: null
    };
  }
  componentDidMount() {
    const node = this.canvasElementRef.current;
    if (node) {
      node.width = 800;
      node.height = 800;
    }
  }
  componentWillUnmount() {
    if (this.state.requestAnimationFrameCancel) {
      cancelAnimationFrame(this.state.requestAnimationFrameCancel);
    }
  }
  render() {
    return (
      <div className="canvas-wrapper">
        <canvas ref={this.canvasElementRef} />
      </div>
    );
  }
}
