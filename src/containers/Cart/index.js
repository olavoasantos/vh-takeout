import axios from 'axios';
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

  checkout = () => {
    const orderItems = this.props.cart.map(product => {
      return {
        productId: product.id,
        quantity: product.count,
      }
    });
    const storeId = this.props.cart[0].storeId; // refactor
    const totalPrice = this.props.cart.reduce((total, product) => total + product.price, 0);
    const user = this.props.user;

    axios.post(
            `http://api-vanhack-event-sp.azurewebsites.net/api/v1/Order`,
            {
              'deliveryAddress': this.addressInput.value,
              'contact': user.email,
              'storeId': storeId,
              'orderItems': orderItems,
              'total': totalPrice,
              'status': 'WAITING'
            },
            {
              headers: {'Authorization': `Bearer ${JSON.parse(localStorage.token)}`}
            }
          )
          .then(response => {
            console.log(response);
            this.props.clearCart();
          })
          .catch(error => {
            console.log(error)
          })
  }

  render() {
    return (
      <div>
        <h1>Cart</h1>
        <hr className="border my-8"/>
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
        {this.props.cart.length > 0 && (
          <div>
            <div className="flex items-center justify-end border p-4 shadow my-4">
            <strong className="mr-4">Total:</strong> <span>${ this.props.cart.reduce((total, product) => total + product.price, 0) }</span> <br/>
          </div>
          <div className="flex items-center justify-end">
            <label className="text-grey-darker text-sm font-bold mr-2">Delivery address </label>
            <input className="mr-4 shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="text" ref={input => this.addressInput = input} />
            {this.props.cart.length > 0 && <button className="bg-teal hover:bg-teal-dark text-white font-bold py-2 px-4 rounded" onClick={() => this.checkout()}>Checkout</button>}
          </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    cart: state['cart'],
    user: state['user'],
  }),
  dispatch => ({
    updateCartProduct: (product, count) => dispatch({type: 'UPDATE_CART_PRODUCT', value: {...product, count}}),
    removeProductFromCart: (product) => dispatch({type: 'REMOVE_PRODUCT_FROM_CART', value: {...product}}),
    clearCart: () => dispatch({type: 'CLEAR_CART'}),
  })
)(Cart);
