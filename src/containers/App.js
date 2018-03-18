import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    test: state['test']
  }),
  (dispatch) => ({
    addTest: () => dispatch({type: 'TEST'})
  }),
)(App);
