import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../product/product.module.css';
import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';
import { decrement, deleteProduct, increment } from '../../redux/actions';

const OrderedProduct = ({ product, amount, increment, decrement, order}) => {
  console.log("1")
  // const {order} = this.props;
  function onDelete(id) {
    delete order[id];
  }

  return (
       <div>
         <h2>My Order</h2>
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>Total price: {product.price*amount} $</div>
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
                onClick={() => onDelete(product.id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
       </div>
  );
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
  order: state.order
});

// const mapDispatchToProps = {
//   increment,
//   decrement,
// };

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  delete: () => dispatch(deleteProduct(props.order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderedProduct);