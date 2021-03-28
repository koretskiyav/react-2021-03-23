import React from 'react';
import Counter from './counter';

import style from './product.module.css';

function Product(props) {
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
