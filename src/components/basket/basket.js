import React from 'react';
import cs from 'classnames';
import PropTypes from 'prop-types';

import Product from '../product';

import styles from './basket.module.css';

const Basket = ({ activeMenu, order }) => {
  const totalPrice = activeMenu
    .map((item, key) => {
      return item.price * Object.values(order)[key];
    })
    .reduce((a, b) => a + b, 0);

  if (!activeMenu.length) {
    return (
      <div className={cs(styles.basket, styles.empty)}>
        Oops, your basket is empty, try to buy something :(
      </div>
    );
  }
  return (
    <div className={styles.basket}>
      {activeMenu.map((item) => {
        return <Product key={item.id} product={item} isBasket />;
      })}
      <div className={styles.totalPrice}>
        Total price: <span>{` ${totalPrice}$`}</span>
      </div>
    </div>
  );
};

Basket.propTypes = {
  activeMenu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    })
  ),
  order: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Basket;
