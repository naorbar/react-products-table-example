import React, { Component } from 'react';
import SearchBox from './SearchBox';
import ProductsTable from './ProductsTable';

import '../App.css';

// Sample static data:
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

class ProductsTableContainer extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
  }

  componentWillMount() {
    console.log('Getting the products list from the server...');
    // getProductsFromServer();
    this.setState({
      products: PRODUCTS,
    });
  }

  filterProductsList(e) {
    console.log("Filtering products list by serch string: " + e.target.value);

    // getProductsFromServer();
    var filteredProductsList = PRODUCTS.filter(p => { return p.name.includes(e.target.value); });
    this.setState({
      products: filteredProductsList,
    });
  }

  render() {
    return (
        <div>
          <SearchBox handleSearchBoxTextChanged={(e) => this.filterProductsList(e)}/>
          <ProductsTable products={this.state.products} />
        </div>
    );
  }
}

export default ProductsTableContainer;
