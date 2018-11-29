import React, { Component } from 'react';

import '../App.css';

class Item extends Component {
  render() {
    if (this.props.instock) {
      return (
          <tr className="InStock">
            <td>{this.props.name}</td><td>{this.props.price}</td>
          </tr>
        );
    } else {
      return (
          <tr className="NotInStock">
            <td>{this.props.name}</td><td>{this.props.price}</td>
          </tr>
        );
    }
  }
}

export default Item;
