import React from 'react';
import counter from './counter.hoc';
import style from './counter.module.css';

import { ReactComponent as Minus } from './minus.svg';
import { ReactComponent as Plus } from './plus.svg';

function Counter(props) {
  const { decrement, increment, amount } = props;

  return (
    <div className={style.counter}>
      <button className={style.btn} onClick={decrement}>
        <Minus className={style.icon} />
      </button>
      {amount}
      <button className={style.btn} onClick={increment}>
        <Plus className={style.icon} />
      </button>
    </div>
  );
}

export default counter(Counter);
