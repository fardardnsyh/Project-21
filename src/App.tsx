import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Support from "./pages/Support";
import Applications from "./pages/Applications";

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {loggedIn: false};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/about" exact render={(props) => <About {...props} />} />
          <Route path="/support" exact render={(props) => <Support {...props} />} />
          <Route path="/signup" component={SignUp} />
          <Route path="/applications" exact render={(props) => <Applications {...props} />} />
        </Switch>
      </Router>
    );
  }
}
