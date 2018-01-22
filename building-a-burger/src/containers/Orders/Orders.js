import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  }

  // firebase returns an object. the id's are the keys from firebase
  componentDidMount() {
    // remove .json to test withErrorHandler
    axios.get('/orders.json')
      .then(res => {
        console.log(res.data);

        // turn the data(object) into an array
        const fetchedOrders = [];
        for (let key in res.data) {
          // instead of pushing res.data[key] on line 22. 
          // push to a new object so we don't lose the id's. Use the spread op. for props.
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        this.setState({loading: false, orders: fetchedOrders});
      })
      .catch(err => {
        this.setState({loading: false});
      }); 
  }

  render() {
    return (
      <div>
        {/* <Order /> */}
        {this.state.orders.map(order => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price} />
        ))}
      </div>
    );
  }
} 

export default withErrorHandler(Orders, axios);