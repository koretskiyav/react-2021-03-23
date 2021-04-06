import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Product from './product';

import styles from './basket.module.css';

class Basket extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired
        }).isRequired
      ).isRequired,
  };

  filterProducts() {
    const { order, products } = this.props;
    return products.filter((product) => order[product.id]);
  }
  
  calculateTotal(products) {
    return products.reduce((sum, product) => {
        return sum += product.price * this.props.order[product.id]
    }, 0);
  }

  render() {
    const products = this.filterProducts();

    if (!products.length) {
      return (
        <div className={styles.basket}>
          <p>Вы еще ничего не заказали</p>
        </div>
      );
    }
    
    const total = this.calculateTotal(products);

    return (
      <div className={styles.basket}>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          <div className={styles.total}>
              Итого: <span className={styles.price}>
                  ${total}
              </span>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  order: state.order || {},
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);

