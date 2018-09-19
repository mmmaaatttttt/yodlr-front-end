import React, { Component } from "react";
import { Link } from "react-router-dom"
import axios from "axios";
import UserCard from "./UserCard";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/users")
      .then(res => {
        this.setState({ users: res.data })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Admin</h1>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/signup">Register</Link></p>
        <h4>Here are all the users:</h4>
        {this.state.users.map(user => <UserCard key={user.id} user={user}/>)}
      </div>
    )
  }
}

export default Admin;
