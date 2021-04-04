import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Basket from '../basket';
import Header from '../header';

export default class App extends PureComponent {
  state = {
    products: []
  };

  componentDidMount() {
    const products = this.props.restaurants.flatMap((restaurant) => restaurant.menu);
    this.setState({ products })
  }

  render() {
    return (
      <div>
        <Header />
        <Restaurants 
          restaurants={this.props.restaurants} 
          products={this.state.products} 
        />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};
