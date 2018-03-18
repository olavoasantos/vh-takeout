import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Nav from './Nav';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav user={this.props.user}></Nav>
          <Main user={this.props.user}></Main>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  (state) => ({
    user: state['user'],
  })
)(App);
