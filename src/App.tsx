import React, { Component } from "react";
import { Router, Link, RouteComponentProps } from "@reach/router";
import "./App.css";

interface HomeProps extends RouteComponentProps {
  path: string;
}

class Home extends React.Component<HomeProps> {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
      </div>
    );
  }
}

interface DashboardProps extends RouteComponentProps {
  path: string;
}

class Dashboard extends React.Component<DashboardProps> {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Sketchy
          <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
        </header>
        <Router>
          <Home path="/" />
          <Dashboard path="dashboard" />
        </Router>
      </div>
    );
  }
}

export default App;
