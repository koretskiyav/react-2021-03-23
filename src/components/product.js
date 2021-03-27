import React, { useState } from 'react';
import Counter from './counter';
import Rate from './rate';

import style from './product.module.css';

function Product(props) {
  const [rate, setRate] = useState(0)
  const handleClick = (e) => setRate(e.currentTarget.dataset.index)
  
  return (
    <div className={style.card}>
      <h3 className={style.title}>
        {props.product.name}
        <Rate value={rate} onClick={handleClick}/>
      </h3>
      <div className="flex-between">
        <span className={style.price}>
          ${props.product.price}
        </span>
        <Counter/>
      </div>
    </div>
  );
}

export default Product;
