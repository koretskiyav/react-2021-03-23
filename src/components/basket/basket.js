import React from 'react';
import { connect } from 'react-redux';
import styles from "./basket.module.css";

import BasketProduct from "./basketProduct";

import { restaurants } from '../../fixtures';

const Basket = ({order}) => {
  let basketProducts = [],
    total = null;

  restaurants.forEach((restaurant) => {
    restaurant.menu.forEach((product) => {
      Object.keys(order).forEach((basketProductsId) => {
        if ( (basketProductsId === product.id) && ( order[basketProductsId] > 0 ) ) {
          basketProducts.push(product);
          total += product.price * order[basketProductsId];
        }
      });
    });
  });

  if (basketProducts.length === 0) return null;

  return (
    <div className={styles.basket}>
      <table className={styles.table}>
        { basketProducts.map((basketProduct) => (
          <BasketProduct key={basketProduct.id} product={basketProduct} />
        ))}
      </table>
      <div className={styles.total}>Total: <span>{total} $</span></div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);


