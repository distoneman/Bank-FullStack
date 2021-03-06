import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/login.js'
import Private from './components/Private/private'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/private' component={Private} />
            <Route />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
