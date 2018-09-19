import React, { Component } from "react";

class UserCard extends Component {
  render() {
    const { firstName, lastName, email, state } = this.props.user
    return (
      <div>
        <ul>
          <li>{firstName} {lastName}</li>
          <li>Email: {email}</li>
          <li>Status: {state}</li>
        </ul>
      </div>
    );
  }
}

export default UserCard;
