import React, { Component } from 'react';

class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className="product">
        <h3>{product.name}</h3>
        <input type="number" min="0" defaultValue="1" ref={input => this.count = input}/>
        <button onClick={() => this.props.addToCart(product, this.count.value)}>add to cart</button>
        <hr/>
      </div>
    );
  }
}

export default Product;
