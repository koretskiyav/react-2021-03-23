import React from 'react';

import style from './product.module.css';

export default function Rate(props) {
  return <div className={style.rate}>Average rating: {props.averageRate}</div>;
}
