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
  context: CanvasRenderingContext2D | null;
}

export default class Sketch extends React.Component<SketchProps, SketchState> {
  private canvasElementRef = React.createRef<HTMLCanvasElement>();
  constructor(props?: any) {
    super(props);
    this.state = {
      canvasElementRef: this.canvasElementRef,
      requestAnimationFrameCancel: null,
      context: null
    };
    this.renderSketch = this.renderSketch.bind(this);
  }
  renderSketch() {
    if (this.state.context) {
      this.state.context.fillStyle = "rgb(192,255,255)";
      this.state.context.fillRect(0, 0, 800, 800);
    }
  }
  componentDidMount() {
    const node = this.canvasElementRef.current;
    if (node) {
      node.width = 800;
      node.height = 800;
      this.setState({ context: node.getContext("2d") }, () => {
        requestAnimationFrame(this.renderSketch);
      });
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
