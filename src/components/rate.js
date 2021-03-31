import React from 'react';
import style from './rate.module.css';

export default function Rate(props) {
  const maxRate = 5;
  const rateUnitHeight = 20;
  const antiProgress = (maxRate - props.rate) * rateUnitHeight;

  return (
    <div className={style.progress}>
      <div className={style.anti_progress} style={{ height: antiProgress + "px" }}></div>
      <div className={style.text}>{props.rate}</div>
    </div>
  )
}
