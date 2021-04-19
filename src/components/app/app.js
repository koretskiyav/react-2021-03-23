import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

import { UserProvider } from '../../contexts/user-context';
import errorPage from '../ErrorPage/error-page';

const App = () => {
  const [name, setName] = useState('Ivan');
  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <Header />
        <Switch>
          <Redirect from="/" exact={true} to="/restaurants" />
          <Route path="/checkout" component={Basket} />
          <Route path="/restaurants" component={Restaurants} />
          <Route
            path="/done"
            component={() => <h1>Thank you for the order!</h1>}
          />
          <Route path="/error" component={errorPage} />
          <Route path="/" component={() => <p>404 - not found :(</p>} />
        </Switch>
      </UserProvider>
    </div>
  );
};

export default App;
