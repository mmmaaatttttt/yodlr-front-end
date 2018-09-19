import React, { Component } from 'react';
import { Switch, Route } from "react-router";
import Signup from "./Signup";
import Admin from "./Admin";
import Main from "./Main";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
