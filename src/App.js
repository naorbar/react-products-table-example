import React, { Component } from 'react';
import ProductsTableContainer from './components/ProductsTableContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Products Table App as described here: <a href="https://reactjs.org/docs/thinking-in-react.html">https://reactjs.org/docs/thinking-in-react.html</a>
        <ProductsTableContainer>
          CONTAINER
        </ProductsTableContainer>
      </div>
    );
  }
}

export default App;
