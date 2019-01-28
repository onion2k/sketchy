import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import "./Menu.css";

interface MenuProps extends RouteComponentProps {}

export default class Menu extends React.Component<MenuProps> {
  render() {
    return (
      <ul className="Menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="sketch">Sketch</Link>
        </li>
      </ul>
    );
  }
}
