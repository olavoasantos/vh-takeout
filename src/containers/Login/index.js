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
                  });
  }

  render() {
    if (this.props.user !== null) {
      return <Redirect to="/" />
    }

    return (
      <div className="mx-auto w-1/3">
        <h1>Login</h1>
        <hr className="border my-8"/>
        <form className="flex flex-col" onSubmit={this.submit}>
          <label class="block text-grey-darker text-sm font-bold" for="email">E-mail</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker my-4" ref={(input) => this.emailInput = input} type="text" name="email" />
          <label class="block text-grey-darker text-sm font-bold" for="password">Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker my-4" ref={(input) => this.passwordInput = input} type="password" name="password" />
          <button className="bg-blue hover:bg-blue-dark text-white font-bold w-full py-2 px-4 rounded" type="submit">login</button>
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
