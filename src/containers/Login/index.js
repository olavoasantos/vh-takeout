import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthController from '../../controllers/AuthController';

class Login extends Component {

  submit = (event) => {
    event.preventDefault();
    AuthController.login({email: this.emailInput.value, password: this.passwordInput.value})
                  .then(user => {
                    this.props.history.push("/");
                    this.props.success(user);
                  })
                  .catch(err => {
                    this.props.fail();
                  })
  }

  render() {
    if (this.props.user !== null) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.submit}>
          <input ref={(input) => this.emailInput = input} type="text" name="email" />
          <input ref={(input) => this.passwordInput = input} type="password" name="password" />
          <button type="submit">login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state['user'],
    redirectToReferrer: state['redirectToReferrer'],
  }),
  (dispatch) => ({
    success: (user) => dispatch({ type: 'LOGIN_SUCCESS', value: user }),
    fail: () => dispatch({ type: 'LOGIN_FAIL' }),
  })
)(Login);
