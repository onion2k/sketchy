import React from "react";
import { Link, RouteComponentProps } from "@reach/router";
import "./Menu.css";

interface MenuProps extends RouteComponentProps {}

export default class Menu extends React.Component<MenuProps> {
  render() {
    return (
      <ul className="Menu">
        <li className="Header">
          <Link to="/">Home</Link>
        </li>
        <li className="Title">Grids</li>

        <li>
          <Link to="grid1">Grid 1</Link>
        </li>
        <li className="Title">Lines</li>
        <li>
          <Link to="lines1">Lines 1</Link>
        </li>
        <li>
          <Link to="lines2">Lines 2</Link>
        </li>
        <li>
          <Link to="lines3">Lines 3</Link>
        </li>
        <li className="Title">Curves</li>
        <li>
          <Link to="continuous1">Continuous 1</Link>
        </li>
        <li>
          <Link to="continuous2">Continuous 2</Link>
        </li>
        <li className="Title">Shapes</li>
        <li>
          <Link to="shapes1">Semicircles 1</Link>
        </li>
        <li>
          <Link to="circle1">Circle 1</Link>
        </li>
      </ul>
    );
  }
}
