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
      <div className="flex items-center border p-4 shadow my-4">
        <h3 className="flex-1">{product.name} (${product.price * product.count})</h3>
        <div>
          <input className="mr-4 shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="number" min="1" onChange={() => this.updateProduct()} defaultValue={product.count} ref={input => this.count = input} />
          <button className="bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded" onClick={() => this.removeFromCart()}>Remove from cart</button>
        </div>
      </div>
    );
  }
}

export default CartProduct;
