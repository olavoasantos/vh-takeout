import React, { Component } from 'react';

class CartProduct extends Component {
  removeFromCart = () => {
    this.props.removeProduct(this.props.product);
  }

  updateProduct = () => {
    this.props.updateProduct(this.props.product, this.count.value);
  }

  render() {
    const product = this.props.product;
    return (
      <div>
        <h3>{product.name} (${product.price * product.count})</h3>
        <input type="number" min="1" onChange={() => this.updateProduct()} defaultValue={product.count} ref={input => this.count = input} />
        <button onClick={() => this.removeFromCart()}>Remove from cart</button>
        <hr/>
      </div>
    );
  }
}

export default CartProduct;
