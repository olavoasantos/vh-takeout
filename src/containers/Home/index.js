import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Home extends Component {

  componentDidMount() {
    axios.get('http://api-vanhack-event-sp.azurewebsites.net/api/v1/Store')
         .then(response => {
           this.props.pushStores(response.data);
         })
         .catch(errors => {
           console.log(errors);
         });
  }

  render() {
    if (this.props.redirectToReferrer === true) {
      return <Redirect to='/' />
    }
    return (
      <div>
        <h1>Stores</h1>
        {this.props.stores.map(store => (
          <Link to={`/stores/${store.id}`} key={`store-list-${store.id}`}>
            <div className="border p-4 shadow my-4 hover:bg-grey-lightest">
              <h2>{store.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    );
  }

}

export default connect(
  state => ({
    stores: state['stores'],
  }),
  (dispatch) => ({
    pushStores: (stores) => dispatch({type: 'ADD_STORES', value: stores}),
  })
)(Home);
