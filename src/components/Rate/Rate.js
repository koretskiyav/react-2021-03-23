import React from 'react';
import style from './Rate.module.scss';

export default function Rate({ rate }) {
  const maxRate = 5;
  const currentRate = (rate / maxRate) * 100;

  return (
    <div className={style['star-rating']}>
      <span style={{ width: `${currentRate}%` }}></span>
    </div>
  )
}