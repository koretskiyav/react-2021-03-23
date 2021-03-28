import React from 'react';
import style from './rating.module.css';

export default function Rate(props) {
  return (
    <div className={style.progress}>
      <div className={style.anti_progress}></div>
      <div className={style.text}>{props.rate}</div>
    </div>
  )
}
