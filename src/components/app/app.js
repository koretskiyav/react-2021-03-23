import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import styles from './app.module.css';

export default class App extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className={styles.mainContent + " column"}>
          <Header />
          <Restaurants restaurants={this.props.restaurants} />
        </div>
        <Basket />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
