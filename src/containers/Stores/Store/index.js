import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Product from '../../Product';

class Store extends Component {

  componentDidMount() {
    const storeId = this.props.match.params.id;
    if(this.props.stores.filter(store => store.id === +storeId).length !== 1) {
      axios.get('http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store')
         .then(response => {
           this.props.pushStores(response.data);
         })
         .catch(errors => {
           console.log(errors);
         });
    }
    axios.get(`http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store/${storeId}/products`)
         .then(response => {
           this.props.pushProducts(response.data);
         })
         .catch(errors => {
           console.log(errors);
         });
  }

  addToCart = (product, count) => {
    this.props.pushToCart(product, count);
  }

  render() {
    const store = this.props.stores.find($store => $store.id === +this.props.match.params.id);
    const products = this.props.products.filter($product => $product.storeId === +this.props.match.params.id);
    if(!store) return null;

    return (
      <div>
        <h1>{store.name}</h1>
        <hr/>
        {products.map(product => {
          return (
            <Product key={`store-product-${product.id}`} addToCart={this.addToCart} product={product} />
          );
        })}
      </div>
    )
  }
}

export default connect(
  state => ({
    stores: state['stores'],
    products: state['products'],
  }),
  (dispatch) => ({
    pushStores: (stores) => dispatch({type: 'ADD_STORES', value: stores}),
    pushProducts: (products) => dispatch({type: 'ADD_PRODUCTS', value: products}),
    pushToCart: (product, count) => dispatch({type: 'ADD_TO_CART', value: { ...product, count }}),
  })
)(Store);
