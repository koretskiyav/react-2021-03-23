import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BasketItem from './basketItem';

const Basket = ({ productList, order }) => {
  const products = Object.keys(order);
  const amounts = Object.values(order);
  const total = products.reduce(((sum, productId, i) => sum + amounts[i] * productList[productId].price), 0);

  return (
    <div>
      <div>
        <h4>Basket</h4>
        {products.map((productId, id) => (
          <BasketItem key={productId} product={productList[productId]} amount={amounts[id]} />
        ))}
      </div>
      <div>
        Total: {total} $
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape()),
  order: PropTypes.shape(),
}

const mapStateToProps = (state, props) => ({
  order: state.order || [],
});

export default connect(mapStateToProps)(Basket);
