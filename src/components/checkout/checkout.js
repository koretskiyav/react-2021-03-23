import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import Basket from '../basket';

import { orderErrorSelector } from '../../redux/selectors';

const Checkout = ({ checkoutError }) => {
  return (
    <div>
      <Switch>
        <Route path="/checkout/success" component={() => <h1>Thank you for the order!</h1>} />
        <Route path="/checkout/error">
          <h1>{checkoutError}</h1>
        </Route>
        <Route exact path="/checkout">
          <Basket />
        </Route>
      </Switch>
    </div>
  );
};



const mapStateToProps = (state) => ({
  checkoutError: orderErrorSelector(state),
});

export default connect(mapStateToProps)(Checkout);
