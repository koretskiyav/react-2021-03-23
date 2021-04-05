import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

export default class App extends PureComponent {
  render() {
    const allProducts = this.props.restaurants
      .map((restaurant) => {
        return restaurant.menu;
      })
      .flat();

    return (
      <div>
        <Header />
        <Basket allProducts={allProducts} />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
