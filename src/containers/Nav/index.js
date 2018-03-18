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
        <nav className="absolute flex items-center justify-between flex-wrap bg-teal p-6 w-full">
          {this.props.user
            ? (
              <div className="flex items-center w-full">
                <ul className="list-reset flex items-center flex-no-shrink text-white mr-full">
                  <span className="font-semibold text-xl tracking-tight mr-4">VH Take Out</span>
                  <li className="mr-2"><Link to='/'>Stores</Link></li>
                  <li className="mr-2"><Link to='/orders'>Orders</Link></li>
                  <li className="mr-2"><Link to='/cart'>My cart ({this.props.cart.reduce((total, product) => total + +product.count, 0)})</Link></li>
                </ul>
                <div className="text-right text-white flex-1"><a href="#" onClick={() => this.logout()}>Logout</a></div>
              </div>
            )
            : (
              <div className="flex items-center w-full justify-end">
              <span className="font-semibold text-xl tracking-tight mr-4 flex-1 text-white">VH Take Out</span>
              <ul className="list-reset flex items-center flex-no-shrink text-white mr-full">
                <li className="mr-2"><Link to='/login'>Login</Link></li>
                <li className="mr-2"><Link to='/register'>Register</Link></li>
              </ul>
              </div>
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
