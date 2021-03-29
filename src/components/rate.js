import React from 'react';

import style from './rate.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate(props) {
  const count = [...Array(props.rating)];

  return (
    <div>
      {count.map((_, index) => (
        <Star key={index} className={style.icon} />
      ))}
    </div>
  );
}
