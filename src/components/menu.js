import React from 'react';

import style from './product.module.css';

export default function Menu(props) {
  return (
    <div className={style.menu}>
      <h1>MENU</h1>
      {props.menu.map((item) => {
        const ingradients = item.ingredients.map((item) => item).join(', ');
        return (
          <div key={item.id} className={style.item}>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Ingradients: {ingradients}</p>
          </div>
        );
      })}
    </div>
  );
}
