import React from "react";
import { RouteComponentProps } from "@reach/router";
import "./Sketch.css";

interface SketchProps extends RouteComponentProps {
  props?: any;
  path: string;
}

export default class Sketch extends React.Component<SketchProps> {
  private ref = React.createRef<HTMLCanvasElement>();
  constructor(props?: any) {
    super(props);
    this.state = { ref: this.ref };
  }
  componentDidMount() {
    const node = this.ref.current;
    if (node) {
      node.width = 800;
      node.height = 800;
    }
  }
  render() {
    return (
      <div className="canvas-wrapper">
        <canvas ref={this.ref} />
      </div>
    );
  }
}
