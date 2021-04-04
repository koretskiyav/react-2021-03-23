import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Product from './product';

import styles from './basket.module.css';

class Basket extends React.PureComponent {
  static propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired
        }).isRequired
      ).isRequired,
  };

  state = { 
      products: [],
      total: 0,
  };

  componentDidMount() {
    this.filterProducts();
    this.calculateTotal();
  }

  componentDidUpdate() {
    this.calculateTotal();
  }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (
//         this.state.products === nextState.products 
//         && this.props.order === nextProps.order
//       ) {
//         return false;
//     }
//     return true;
//   }

  filterProducts() {
    const { order, products } = this.props;
    const filteredProducts = products.filter((product) => order[product.id]);

    this.setState({ products: filteredProducts });
  }
  
  calculateTotal() {
    const total = this.state.products.reduce((sum, product) => {
        return sum += product.price * this.props.order[product.id]
    }, 0);
    console.log(total)
    this.setState({ total });
  }

  render() {
    if (!this.state.products.length) {
      return (
        <div className={styles.basket}>
          <p>Вы еще ничего не заказали</p>
        </div>
      );
    }

    return (
      <div className={styles.basket}>
          {this.state.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
          <div className={styles.total}>
              Итого: <span className={styles.price}>
                  ${this.state.total}
              </span>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  order: state.order || {},
});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);

