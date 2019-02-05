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
          <h2>Grid</h2>
          <ul>
            <li>
              <Link to="grid1">Grid 1</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Lines</h2>
          <ul>
            <li>
              <Link to="lines1">Lines 1</Link>
            </li>
            <li>
              <Link to="lines2">Lines 2</Link>
            </li>
            <li>
              <Link to="lines3">Lines 3</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Curves</h2>
          <ul>
            <li>
              <Link to="continuous1">Continuous 1</Link>
            </li>
            <li>
              <Link to="continuous2">Continuous 2</Link>
            </li>
          </ul>
        </li>
        <li>
          <h2>Shapes</h2>
          <ul>
            <li>
              <Link to="shapes1">Semicircles 1</Link>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}
