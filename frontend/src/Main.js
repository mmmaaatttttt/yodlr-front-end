import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main</h1>
        <h4>Where would you like to go?</h4>
        <p>
          <Link to="/signup">Registration Page</Link>
        </p>
        <p>
          <Link to="/admin">Admin Page</Link>
        </p>
      </div>
    );
  }
}

export default Main;
