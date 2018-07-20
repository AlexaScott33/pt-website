import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Schedule from './Schedule';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home"/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/abput" component={About}/>
          <Route exact path="/schedule" component={Schedule}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
