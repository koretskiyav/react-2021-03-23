import React from 'react';
import counter from '../../hocs/counter';
import styles from './Product.module.css';

import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

function Product(props) {
  const { decrement, increment, amount } = props;

  return (
    <div className={styles.card}>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <button className={styles.btn} onClick={decrement}>
        <Minus className={styles.icon} />
      </button>
      {amount}
      <button className={styles.btn} onClick={increment}>
        <Plus className={styles.icon} />
      </button>
    </div>
  );
}

export default counter(Product);
