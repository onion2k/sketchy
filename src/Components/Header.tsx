import React from "react";
import { RouteComponentProps } from "@reach/router";
import Menu from "./Menu";

interface HeaderProps extends RouteComponentProps {}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header className="App-Sidebar">
        <h1>Sketchy</h1>
        <Menu />
      </header>
    );
  }
}
