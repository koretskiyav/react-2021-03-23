import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './basket.css';
import styles from './basket.module.css';
import itemStyles from './basket-item/basket-item.module.css';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderSelector,
  orderProductsSelector,
  totalSelector,
  orderIsProcessingSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user-context';
import { orderProcessStart } from '../../redux/actions';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  orderData,
  orderProcessStart,
  orderIsProcessing,
}) {
  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const processCheckout = () => {
    console.log('Start checkout!!!');
    const preparedData = Object.keys(orderData).map((key) => {
      return { id: key, amount: orderData[key] };
    });
    console.log('preparedData', preparedData);
    orderProcessStart(preparedData);
  };

  console.log(orderIsProcessing);

  return (
    <div className={styles.basket}>
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
          <p>{`${total} $`}</p>
        </div>
      </div>
      <Switch>
        <Route path="/checkout" exact={true}>
          <Button
            primary={!orderIsProcessing}
            block
            onClick={processCheckout}
            inactive={orderIsProcessing}
          >
            checkout
          </Button>
        </Route>
        <Route>
          <Link to="/checkout">
            <Button primary block>
              checkout
            </Button>
          </Link>
        </Route>
        <Redirect to="/checkout" />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    total: totalSelector(state),
    orderProducts: orderProductsSelector(state),
    orderData: orderSelector(state),
    orderIsProcessing: orderIsProcessingSelector(state),
  };
};

export default connect(mapStateToProps, { orderProcessStart })(Basket);
