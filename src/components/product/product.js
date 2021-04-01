import React from 'react';
import counter from '../../hocs/counter';
import PropTypes from 'prop-types';

import style from './product.module.css';

import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

const Product = ({ product, decrement, increment, amount }) =>  (
  <div className={style.card}>
    <p>{product.name}</p>
    <p className={style.description}>{product.ingredients.join(', ')}</p>
    <p>{product.price} $</p>
    <button onClick={decrement}>
      <Minus className={style.icon} />
    </button>
    {amount}
    <button onClick={increment}>
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

