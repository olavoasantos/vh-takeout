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
      <div className="mx-auto w-1/3">
        <h1>Register</h1>
        <hr className="border my-8"/>
        <form onSubmit={this.submit}>
          <label class="block text-grey-darker text-sm font-bold" for="email">Name</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker my-4" ref={(input) => this.nameInput = input} type="text" name="name" /> <br/>
          <label class="block text-grey-darker text-sm font-bold" for="email">E-mail</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker my-4" ref={(input) => this.emailInput = input} type="text" name="email" /> <br/>
          <label class="block text-grey-darker text-sm font-bold" for="email">Password</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker my-4" ref={(input) => this.passwordInput = input} type="password" name="password" /> <br/>
          <label class="block text-grey-darker text-sm font-bold" for="email">Address</label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker my-4" ref={(input) => this.addressInput = input} type="text" name="address" /> <br/>
          <button className="bg-blue hover:bg-blue-dark text-white font-bold w-full py-2 px-4 rounded" type="submit">register</button>
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
