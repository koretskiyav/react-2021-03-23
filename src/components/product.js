import React from 'react';
import counter from '../hocs/counter';

import style from './product.module.css';

import { ReactComponent as Minus } from '../icons/minus.svg';
import { ReactComponent as Plus } from '../icons/plus.svg';

function Product(props) {
  const { decrement, increment, amount } = props;

  return (
    <div className={style.card}>
      <div className={style.name}>{props.product.name}</div>
      <div className={style.cnt}>
        <div className={style.price}>{props.product.price} $</div>
        <button onClick={decrement} className={style.button}>
          <Minus className={style.icon} />
        </button>
        {amount}
        <button onClick={increment} className={style.button}>
          <Plus className={style.icon} />
        </button>
      </div>
    </div>
  );
}

export default counter(Product);
