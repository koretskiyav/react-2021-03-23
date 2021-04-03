import React from 'react';
import style from './navigation.module.css';

export default function Navigation(props) {
  const handleClick = (e) => props.onClick(e.currentTarget.dataset.id)

  return (
    <ul className={style.navigation}>
      {props.data.map((item) => (
        <li
          key={item.id}
          className={item.id === props.activeId ?  style.active : ''}
        >
          <button
            data-id={item.id}
            className={style.btn}
            onClick={handleClick}
          >
            {item[props.titlePropName]}
          </button>
        </li>
      ))}
    </ul>
  );
}
