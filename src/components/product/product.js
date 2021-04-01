import React from 'react';
import counter from '../../hocs/counter';
import PropTypes from 'prop-types';

import style from './product.module.css';

import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

const Product = ({ product, decrement, increment, amount }) =>  (
  <div className={style.card} data-id="product">
    <p>{product.name}</p>
    <p className={style.description}>{product.ingredients?.join(', ')}</p>
    <p>{product.price} $</p>
    <button onClick={decrement} data-id="product-decrement">
      <Minus className={style.icon} />
    </button>
    <div data-id="product-amount">{amount}</div>
    <button onClick={increment} data-id="product-increment">
      <Plus className={style.icon} />
    </button>
  </div>
);

Product.prototypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired)
  }).isRequired,
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func
};

export default counter(Product);

