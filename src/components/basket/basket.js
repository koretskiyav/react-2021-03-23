import React from 'react';

import { restaurants } from '../../fixtures';
import { connect } from 'react-redux';
import styles from './basket.module.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { decrement, increment } from '../../redux/actions';
const Basket = ({ menu }) => {
  let total = 0;
  return (
    <div>
      <div>
        {Object.entries(menu).map(([key, value]) => {
          let restaurant = restaurants.find((restaurant) =>
            restaurant.menu.find((item) => item.id === key)
          );
          let product = restaurant.menu.find((item) => item.id === key);
          let subtotal = value * product.price;
          total += subtotal;
          console.log(total);
          return (
            <div className={styles.product} data-id="product" key={key}>
              <div className={styles.content}>
                <div>
                  <h4 className={styles.title}>{product.name}</h4>
                  <div className={styles.price}>{product.price} $</div>
                </div>
                <div>
                  <div className={styles.counter}>
                    <div className={styles.count} data-id="product-amount">
                      {value}
                    </div>
                    <div className={styles.buttons}>
                      <button
                        className={styles.button}
                        onClick={decrement}
                        data-id="product-decrement"
                      >
                        <Minus />
                      </button>
                      <button
                        className={styles.button}
                        onClick={increment}
                        data-id="product-increment"
                      >
                        <Plus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.floatRight}>Subtotal: {subtotal}$</div>
            </div>
          );
        })}
      </div>
      <h2 className={styles.floatRight}>Total: {total}$</h2>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  menu: state.order,
});

export default connect(mapStateToProps)(Basket);
