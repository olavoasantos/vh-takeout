import React, { Component } from 'react';

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="flex items-center border p-4 shadow my-4">
        <h3>{product.name}</h3>
        <div className="flex-1 text-right">
          <input className="mr-4 shadow appearance-none border rounded py-2 px-3 text-grey-darker" type="number" min="0" defaultValue="1" ref={input => this.count = input}/>
          <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" onClick={() => this.props.addToCart(product, this.count.value)}>add to cart</button>
        </div>
      </div>
    );
  }
}

export default Product;
