import { connect } from 'react-redux';
import React, { Component } from 'react';

import CartProduct from './CartProduct';

class Cart extends Component {
  updateProduct = (product, count) => {
    this.props.updateCartProduct(product, count);
  }
  removeProduct = (product) => {
    this.props.removeProductFromCart(product);
  }

  render() {
    return (
      <div>
        <h1>Cart</h1>
        <hr/>
        {this.props.cart.length === 0 && 'No products yet'}
        {this.props.cart.map(product => {
          return (
            <CartProduct
              key={`cart-product-${product.id}`}
              product={product}
              updateProduct={this.updateProduct}
              removeProduct={this.removeProduct}
            />
          );
        })}
        <hr/>
        <strong>Total:</strong> <span>${ this.props.cart.reduce((total, product) => total + product.price, 0) }</span>
      </div>
    );
  }
}

export default connect(
  state => ({
    cart: state['cart'],
  }),
  dispatch => ({
    updateCartProduct: (product, count) => dispatch({type: 'UPDATE_CART_PRODUCT', value: {...product, count}}),
    removeProductFromCart: (product) => dispatch({type: 'REMOVE_PRODUCT_FROM_CART', value: {...product}}),
  })
)(Cart);
