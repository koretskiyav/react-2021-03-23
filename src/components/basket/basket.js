import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Banner from '../banner';
import styles from './basket.module.css';
import { connect } from 'react-redux';
import Product from '../product';
import Total from '../total';

const Basket = ({ restaurants, order }) => {
  const productsToOrder = useMemo(() => {
    const resultProducts = [];
    Object.keys(order).forEach((key) => {
      restaurants.find((rest) => {
        return rest.menu?.find((prod) => {
          if (prod.id === key) {
            resultProducts.push(prod);
            return true;
          }
          return false;
        });
      });
    });
    return resultProducts;
  }, [restaurants, order]);

  return (
    <div>
      <Banner heading={'Basket'}>
        <span>Adjust your order</span>
      </Banner>
      <div className={styles.restaurant}>
        {productsToOrder
          ? productsToOrder?.map((product) => {
              return (
                <Product key={product.id} product={product} showTotal={true} />
              );
            })
          : 'Choose something in restaurants menus.'}
        <Total restaurants={restaurants} />
      </div>
    </div>
  );
};

Basket.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({ menu: PropTypes.array }))
    .isRequired,
};

const mapStateToProps = (state, props) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Basket);
