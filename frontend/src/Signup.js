import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    let { email, firstName, lastName } = this.state;
    return (
      <div>
        <h1>Signup</h1>
        <form>
          <input
            type="text"
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
