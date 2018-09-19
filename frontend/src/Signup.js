import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", this.state)
      .then(res => {
        this.props.history.push("/admin");
      })
      .catch(err => {
        console.log("NO :(", err);
      });
  }

  render() {
    let { email, firstName, lastName } = this.state;
    return (
      <div>
        <h1>Signup</h1>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/admin">Admin</Link></p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email."
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="text"
            name="firstName"
            placeholder="Enter your first name."
            onChange={this.handleChange}
            value={firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter your last name."
            onChange={this.handleChange}
            value={lastName}
          />
          <input type="submit" value="Add user!" />
        </form>
      </div>
    );
  }
}

export default Signup;
