import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

class App extends Component {
  // state: for testing
  // state = {
  //   show: true
  // }

  // // for testing
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({show: false});
  //   }, 5000)
  // }

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          {/* for testing on WillMount */}
          {/* {this.state.show ? <BurgerBuilder /> : null} */}
        </Layout>
      </div>
    );
  }
}

export default App;
