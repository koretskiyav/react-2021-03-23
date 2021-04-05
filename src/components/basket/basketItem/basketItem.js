import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './basketItem.module.css';
import { ReactComponent as Minus } from '../../../icons/minus.svg';
import { ReactComponent as Plus } from '../../../icons/plus.svg';

import { decrement, increment, remove } from '../../../redux/actions';

const BasketItem = ({ product, amount, increment, decrement, remove }) => {
  return (
    <div className={styles.content}>
      <div>
        <h5>{ product.name }</h5>
        <h6>/{ product.restaurant }/</h6>
      </div>
      <div>
        <div className={styles.counter}>
          <div className={styles.count} data-id="product-amount">
            {amount}
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={decrement}
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
            <button
              className={styles.button}
              onClick={remove}
              data-id="product-remove"
            >
              X
            </button>

          </div>
          <div className={styles.price}>
            { amount * product.price } $
          </div>
        </div>
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    restaurant: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
}

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  remove: () => dispatch(remove(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
