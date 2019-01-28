import React from "react";
import { RouteComponentProps } from "@reach/router";

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
      node.width = 300;
      node.height = 300;
    }
  }
  render() {
    return <canvas ref={this.ref} />;
  }
}
