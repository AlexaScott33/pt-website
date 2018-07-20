import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import Schedule from './Schedule';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/schedule" component={Schedule}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
