import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';

const Basket = ({ restaurants, order }) => {
  function getProducts(restaurants, order) {
    const products = [];

    restaurants.forEach((restaurant) => {
      restaurant.menu.forEach((product) => {
        if (order[product.id]) {
          products.push(product);
        }
      });
    });

    return products;
  }

  const products = useMemo(() => getProducts(restaurants, order), [
    restaurants,
    order,
  ]);

  const total = useMemo(
    () =>
      products
        .map((product) => product.price * order[product.id])
        .reduce((total, price) => total + price, 0),
    [products]
  );

  return (
    <div>
      {products.map((product) => (
        <Product key={'order' + product.id} product={product} />
      ))}

      <div>Total: {total}</div>
    </div>
  );
};

Basket.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired
  ).isRequired,
  order: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);
