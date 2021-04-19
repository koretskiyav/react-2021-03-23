import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';
import itemStyles from './basket-item/basket-item.module.css';

import BasketItem from './basket-item';
import Button from '../button';

import { orderProductsSelector, totalSelector } from '../../redux/selectors';
import { checkout } from '../../redux/actions';
import { UserConsumer } from '../../contexts/user-context';
import { currencyContext } from '../../contexts/currency-context';
import { rates, signs } from '../currency-switcher/currencies';

function Basket({ title = 'Basket', total, orderProducts, onClick }) {
  const { currency } = useContext(currencyContext);

  const location = useLocation();

  const handleClick = (event) => {
    if (location.pathname === '/checkout') {
      event.preventDefault();
      event.target.disabled = true;
      onClick();
    }
  };

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div id="basket-container" className={styles.basket}>
      <h4 className={styles.title}>
        <UserConsumer>{({ name }) => `${name}'s ${title}`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition key={product.id} timeout={300} classNames="basket">
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <div className={itemStyles.basketItem}>
        <div className={itemStyles.name}>
          <p>Total</p>
        </div>
        <div className={itemStyles.info}>
          <p>{(+total * +rates[currency]).toFixed(2)} {signs[currency]}</p>
        </div>
      </div>
      <Link to="/checkout">
        <Button primary block onClick={handleClick}>
          checkout
        </Button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(checkout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
