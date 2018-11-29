import React, { Component } from 'react';
import Item from './Item';
import '../App.css';

// Use foreach vs map:
//  foreach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database)
//  map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase)
// References:
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

class ProductsTable extends Component {
  render() {
    var newProductsList = [];
    var previousCategory = '';
    this.props.products.sort((a,b) => a.category.localeCompare(b.category));
    this.props.products.forEach(
      p => {
        if (p.category !== previousCategory) {
          newProductsList.push(<tr><th colSpan="2">{p.category}</th></tr>);
        }
        newProductsList.push(<Item name={p.name} price={p.price} instock={p.stocked}/>);
        previousCategory = p.category;
      }
    );

    return (
        <table>
          <thead>
            <tr><td>Name</td><td>Price</td></tr>
          </thead>
          <tbody>
            {newProductsList}
          </tbody>
        </table>
    );
  }
}

export default ProductsTable;
