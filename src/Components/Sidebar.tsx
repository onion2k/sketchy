import React from "react";
import { RouteComponentProps } from "@reach/router";
import Menu from "./Menu";
import "./App-Sidebar.css";

interface HeaderProps extends RouteComponentProps {}

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <header className="App-Sidebar">
        <Menu />
      </header>
    );
  }
}
