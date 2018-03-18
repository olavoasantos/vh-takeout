import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RegisterController from '../../controllers/RegisterController';

class Register extends Component {

  submit = (event) => {
    event.preventDefault();
    RegisterController
            .register({
              name: this.nameInput.value,
              email: this.emailInput.value,
              password: this.passwordInput.value,
              address: this.addressInput.value,
            })
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
        <h1>Register</h1>
        <form onSubmit={this.submit}>
          <input ref={(input) => this.nameInput = input} type="text" name="name" /> <br/>
          <input ref={(input) => this.emailInput = input} type="text" name="email" /> <br/>
          <input ref={(input) => this.passwordInput = input} type="password" name="password" /> <br/>
          <input ref={(input) => this.addressInput = input} type="text" name="address" /> <br/>
          <button type="submit">register</button>
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
    success: (user) => dispatch({ type: 'LOGIN_SUCCESS', user }),
    fail: () => dispatch({ type: 'LOGIN_FAIL' }),
  })
)(Register);
