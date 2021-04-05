import React from 'react';
import Product from '../product';

import { restaurants } from '../../fixtures';
import { connect } from 'react-redux';
import styles from './basket.module.css';

const Basket = ({ order }) => {
  let total = 0;
  return (
    <div>
      {Object.entries(order).map(([key, value]) => {
        let restaurant = restaurants.find((restaurant) =>
          restaurant.menu.find((item) => item.id === key)
        );
        let product = restaurant.menu.find((item) => item.id === key);
        total += value * product.price;
        return <Product key={key} product={product} basket={true} />;
      })}
      <h2 className={styles.floatRight}>Total: {total}$</h2>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);
