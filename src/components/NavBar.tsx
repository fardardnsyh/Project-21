import React, { Component } from "react";
import { Link } from "react-router-dom";
import BrandLink from "./BrandLink";

interface Props {}
interface State {}

export default class NavBar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <nav>
        <BrandLink />
        <Link to="/signup" className="btn nav-btn" id="login">
          <i className="tim-icons tim-icons-lg icon-single-02 teal" />
        </Link>
        <Link to="/support" className="btn nav-btn">
          Support
        </Link>
        <Link to="/about" className="btn nav-btn">
          About
        </Link>
        <Link to="/applications" className="btn nav-btn">
          Applications
        </Link>
      </nav>
    );
  }
}
