import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BasketItem from './basketItem/basketItem';

class Basket extends React.Component {
  static propTypes = {
    allProducts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  getSelectedItems() {
    const { allProducts, selectedItemsIds } = this.props;

    const selectedItems = allProducts
      .filter((product) => {
        return (
          selectedItemsIds.hasOwnProperty(product.id) &&
          selectedItemsIds[product.id] > 0
        );
      })
      .map((product) => {
        return {
          product,
          amount: selectedItemsIds[product.id],
        };
      });

    return selectedItems;
  }

  render() {
    const basketItems = this.getSelectedItems();
    const totalPrice = basketItems.reduce((total, item) => {
      return total + item.amount * item.product.price;
    }, 0);

    return (
      <div data-id="basket">
        <div>
          {basketItems.map((item) => (
            <BasketItem key={item.product.id} item={item} />
          ))}
        </div>
        <div>
          <p>Total to pay: {totalPrice} $</p>
        </div>
      </div>
    );
  }
}

const stateToProps = (state, props) => ({
  selectedItemsIds: state.order,
});

export default connect(stateToProps)(Basket);
