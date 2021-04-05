import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

import styles from './app.module.css';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />

        <div className={styles.leftcol}>
          <Restaurants restaurants={this.props.restaurants} />
        </div>

        <div className={styles.rightcol}>
          <Basket productList={this.getProducts()} />
        </div>
      </div>
    );
  }

  getProducts() {
    let products = [];

    this.props.restaurants.forEach((restaurant) => {
      restaurant.menu.forEach((menu) => {
        products[menu.id] = {
          id: menu.id,
          name: menu.name,
          restaurant: restaurant.name,
          price: menu.price
        }
      });
    });

    return products;
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
