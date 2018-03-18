import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Cuisin extends Component {
  componentDidMount() {
    const cuisinId = this.props.match.params.id;
    if(this.props.cuisins.filter(cuisin => cuisin.id === +cuisinId).length !== 1) {
      axios.get('http://api-vanhack-event-sp.azurewebsites.net/api/v1/Cousine')
         .then(response => {
           this.props.pushCuisin(response.data);
         })
         .catch(errors => {
           console.log(errors);
         });
    }
    axios.get(`http://api-vanhack-event-sp.azurewebsites.net/api/v1/Cousine/${cuisinId}/stores`)
         .then(response => {
           this.props.pushStores(response.data);
         })
         .catch(errors => {
           console.log(errors);
         });
  }

  render() {
    const cuisin = this.props.cuisins.find($cuisin => $cuisin.id === +this.props.match.params.id);
    const stores = this.props.stores.filter($store => $store.cousineId === +this.props.match.params.id);
    if(!cuisin) return null;

    return (
      <div>
        <h1>{cuisin.name}</h1>
        <hr/>
        {stores.map(store => {
          return (
            <h3 key={`cuisin-store-${store.id}`}>{store.name}</h3>
          );
        })}
      </div>
    )
  }
}

export default connect(
  state => ({
    cuisins: state['cuisins'],
    stores: state['stores']
  }),
  (dispatch) => ({
    pushCuisin: (cuisins) => dispatch({type: 'ADD_CUISINS', value: cuisins}),
    pushStores: (stores) => dispatch({type: 'ADD_STORES', value: stores}),
  })
)(Cuisin);
