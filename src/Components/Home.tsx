import React from "react";
import { RouteComponentProps } from "@reach/router";

interface HomeProps extends RouteComponentProps {
  path: string;
}

export default class Home extends React.Component<HomeProps> {
  render() {
    return <p>Welcome to Sketchy, an interactive code sketch playground.</p>;
  }
}
