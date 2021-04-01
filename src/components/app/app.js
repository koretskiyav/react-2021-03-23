import React, { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';
import PropTypes from 'prop-types';

export default class App extends PureComponent {
  static propTypes = {
    restaurants: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
