import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Checkout from '../checkout';

import { UserProvider } from '../../contexts/user-context';

const App = () => {
  const [name, setName] = useState('Ivan');

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/restaurants" component={Restaurants} />
          <Route path="/error" component={() => <h1>Error Page!</h1>} />
          <Redirect exact from="/" to="/restaurants" />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
