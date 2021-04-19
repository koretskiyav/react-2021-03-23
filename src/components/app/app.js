import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Checkout from '../checkout';

import { UserProvider } from '../../contexts/user-context';
import { CurrencyProvider } from '../../contexts/currency-context';

const App = () => {
  const [name, setName] = useState('Ivan');
  const [currency, setCurrency] = useState('USD');

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{ currency, setCurrency }}>
        <Header />
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/error" component={() => <h1>Error Page!</h1>} />
            <Redirect exact from="/" to="/restaurants" />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
