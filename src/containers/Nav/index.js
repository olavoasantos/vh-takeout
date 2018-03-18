import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Nav extends Component {
  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <header>
        <nav>
          {this.props.user
            ? (
              <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/cart'>My cart ({this.props.cart.reduce((total, product) => total + +product.count, 0)})</Link></li>
                <li><a href="#" onClick={() => this.logout()}>Logout</a></li>
              </ul>
            )
            : (
              <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/register'>Register</Link></li>
              </ul>
            )

          }
        </nav>
      </header>
    );
  }
}

export default connect(
  state => ({
    cart: state['cart']
  }),
  (dispatch) => ({
    logout: () => dispatch({type: 'LOGOUT'}),
  }),
)(Nav);
