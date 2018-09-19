import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import UserCard from "./UserCard";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  toggleStatus(user) {
    let newUserState = user.state === "active" ? "pending" : "active";
    let newUser = { ...user, state: newUserState };
    axios
      .put(`http://localhost:3000/users/${user.id}`, newUser)
      .then(res => {
        let usersCopy = [...this.state.users];
        let userIdx = usersCopy.findIndex(u => u.id === newUser.id);
        usersCopy[userIdx] = newUser;
        this.setState({ users: usersCopy });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/signup">Register</Link>
        </p>
        <h4>Here are all the users:</h4>
        {this.state.users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            toggleStatus={() => this.toggleStatus(user)}
          />
        ))}
      </div>
    );
  }
}

export default Admin;
