import axios from 'axios';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Orders extends Component {
  componentDidMount() {
    axios.get(`http://api-vanhack-event-sp.azurewebsites.net/api/v1/Order/customer`, {
            headers: {'Authorization': `Bearer ${JSON.parse(localStorage.token)}`}
          })
         .then(response => {
           this.props.pushOrders(response.data);
         })
         .catch(error => {
           console.log(error);
         })
  }

  render () {
    return (
      <div>
        <h1>My orders</h1>
        <hr/>
        {this.props.orders.map(order => {
          return (
            <div className="border p-4 shadow my-4" key={`orders-list-${order.id}`}>
              <h3>#{order.id} - <small>status: {order.status}</small></h3>
              <ul className="bg-grey-lightest my-4 p-4">
                {order.orderItems.map(orderItem => {
                  return (
                    <li className="ml-4" key={`order-item-${order.id}-${orderItem.id}`}>{orderItem.product.name} ({orderItem.quantity}) - ${orderItem.product.price}</li>
                  );
                })}
                <li className="list-reset ml-2 mt-4 pt-4 border-t" ><strong>Total: {order.total}</strong></li>
              </ul>
              <hr/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default connect(
  state => ({
    orders: state['orders']
  }),
  dispatch => ({
    pushOrders: (orders) => dispatch({type: 'ADD_ORDERS', value: orders}),
  })
)(Orders);
