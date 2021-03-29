import React from 'react';
import Product from './product';

import style from './menu.module.css';

export default function Menu(props) {
  return (
    <div className={style.list}>
      {props.menu.map((product) => (
        <div key={product.id} className={style.item}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}
