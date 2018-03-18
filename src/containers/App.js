import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 onClick={this.props.addTest}>{this.props.test}</h1>
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
