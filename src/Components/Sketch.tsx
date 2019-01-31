import React, { RefObject } from "react";
import { RouteComponentProps } from "@reach/router";
import "./Sketch.css";

interface SketchProps extends RouteComponentProps {
  props?: any;
  path: string;
}

interface SketchState {
  canvasElementRef: RefObject<HTMLCanvasElement>;
  context: CanvasRenderingContext2D | null;
}

export interface interfaceDraw {
  context: CanvasRenderingContext2D | null;
  width: number;
  height: number;
  frame: number;
}

export default class Sketch extends React.Component<SketchProps, SketchState> {
  private canvasElementRef = React.createRef<HTMLCanvasElement>();
  private requestAnimationFrameCancel: number = 0;
  private frame: number = 0;
  constructor(props?: any) {
    super(props);
    this.state = {
      canvasElementRef: this.canvasElementRef,
      context: null
    };
    this.frame = 0;
    this.loop = this.loop.bind(this);
    this.draw = this.draw.bind(this);
  }
  draw(options: interfaceDraw) {
    const { context } = options;
    if (context) {
      context.fillStyle = "rgb(192,255,255)";
      context.fillRect(0, 0, 800, 800);
    }
  }
  loop() {
    this.frame++;
    if (this.state.context) {
      this.draw({
        context: this.state.context,
        width: 800,
        height: 800,
        frame: this.frame
      });
    }
    this.requestAnimationFrameCancel = requestAnimationFrame(this.loop);
  }
  componentDidMount() {
    const canvasElement = this.canvasElementRef.current;
    if (canvasElement) {
      canvasElement.width = 800;
      canvasElement.height = 800;
      this.setState({ context: canvasElement.getContext("2d") }, () => {
        this.requestAnimationFrameCancel = requestAnimationFrame(this.loop);
      });
    }
  }
  componentWillUnmount() {
    if (this.requestAnimationFrameCancel) {
      cancelAnimationFrame(this.requestAnimationFrameCancel);
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
