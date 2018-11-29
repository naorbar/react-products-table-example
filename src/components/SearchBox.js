import React, { Component } from 'react';
import '../App.css';

class SearchBox extends Component {
  render() {
    return (
        <h3>
          Search Here: <input type="text" onChange={this.props.handleSearchBoxTextChanged}/>
        </h3>
    );
  }
}

export default SearchBox;
