import React from 'react';
import {connect} from 'react-redux';
import styles from "./basketProduct.module.css";
import {ReactComponent as Minus} from "../../../icons/minus.svg";
import {ReactComponent as Plus} from "../../../icons/plus.svg";
import {ReactComponent as Remove} from "../../../icons/remove.svg";
import {decrement, increment, remove} from '../../../redux/actions';

const BasketProduct = ({product, amount, increment, decrement, remove}) => {
  return (
      <tr className={styles.product}>
        <td className={styles.title}>{product.name}</td>
        <td className={styles.price}>{product.price} $</td>
        <td className={styles.sum}>{product.price * amount} $</td>
        <td className={styles.count}>
          {amount}
        </td>
        <td className={styles.buttons}>
          <button
            className={styles.button}
            onClick={decrement}
            data-id="product-decrement"
          >
            <Minus/>
          </button>
          <button
            className={styles.button}
            onClick={increment}
            data-id="product-increment"
          >
            <Plus/>
          </button>
          <button
            className={styles.button}
            onClick={remove}
            data-id="product-remove"
          >
            <Remove/>
          </button>
        </td>
      </tr>

  );
};

const mapStateToProps = (state, props) => ({
  amount: state.order[props.product.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.product.id)),
  decrement: () => dispatch(decrement(props.product.id)),
  remove: () => dispatch(remove(props.product.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketProduct);
