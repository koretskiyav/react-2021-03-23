import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './product.module.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { decrement, increment, discard } from '../../redux/actions';

const Product = ({
  product,
  showTotal,
  amount,
  increment,
  decrement,
  discard,
  fetchData,
}) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
  }, []); // eslint-disable-line

  const decrementOrDiscard = () => {
    if (amount > 1) {
      return decrement();
    }

    if (showTotal) {
      decrement();
    } else {
      discard();
    }
  };

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>
            {showTotal ? 'Total ' + product.price * amount : product.price} $
          </div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={decrementOrDiscard}
                data-id="product-decrement"
              >
                <Minus />
              </button>
              <button
                className={styles.button}
                onClick={increment}
                data-id="product-increment"
              >
                <Plus />
              </button>
              {showTotal && (
                <button
                  className={styles.button}
                  onClick={discard}
                  data-id="product-discard"
                >
                  X
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  showTotal: PropTypes.bool,
  fetchData: PropTypes.func,
  // from connect
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  discard: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  discard: () => dispatch(discard(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
