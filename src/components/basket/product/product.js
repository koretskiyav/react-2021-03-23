import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './product.module.css';
import cn from 'classnames';
// import { ReactComponent as Minus } from '../../icons/minus.svg';
// import { ReactComponent as Plus } from '../../icons/plus.svg';
import { decrement, increment, clear } from 'redux/actions';

const Product = ({ product, amount, increment, decrement, clear, fetchData }) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
  }, []); // eslint-disable-line

  return (
    <div key={product.id} className={styles.product}>
      <div className={styles.content}>
        
            <div>
              <h4 className={styles.title}>{product.name}</h4>
              <div className={styles.price}>${product.price}</div>
            </div>
            <div>
              <div className={styles.counter}>
                <div className={styles.count} data-id="product-amount">
                  {amount}
                </div>
                <div className={styles.buttons}>
                  <button
                    className={cn(styles.button, styles['counter-button'])}
                    onClick={decrement}
                    data-id="product-decrement"
                  >
                    -
                  </button>
                  <button
                    className={cn(styles.button, styles['counter-button'])}
                    onClick={increment}
                    data-id="product-increment"
                  >
                    +
                  </button>
                </div>
              </div>
                <div className={styles.total}>
                  <button
                    className={cn(styles.button, styles['delete-button'])}
                    onClick={clear}
                    data-id="product-clear"
                  >
                    &times;
                  </button>
                  <div className={styles.price}>${product.price * amount}</div>
                </div>
            </div>
        
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  fetchData: PropTypes.func,
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  clear: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  clear: () => dispatch(clear(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
