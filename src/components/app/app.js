import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';

export default class App extends Component {
  render() {
    const products = this.props.restaurants
      .flatMap((restaurant) => restaurant.menu);
    
    return (
      <div>
        <Header />
        <Restaurants 
          restaurants={this.props.restaurants} 
          products={products} 
        />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.object
    ).isRequired,
};
