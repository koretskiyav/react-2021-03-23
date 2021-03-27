import React, { useState } from 'react';
import Counter from './counter';

import style from './product.module.css';

function Product(props) {
  const [rate, setRate] = useState(0)
  const handleClick = (e) => setRate(e.currentTarget.dataset.index)
  
  return (
    <div className="card">
      <h3>{props.product.name}</h3>
      <p>
        Ingredients: {props.product.ingredients.join(', ')}
      </p>
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
