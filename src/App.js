import React, { Component } from 'react';
import Layout from '../src/hoc/Layout/Layout';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout><p>Test</p></Layout>
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;
