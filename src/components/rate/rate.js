import React from 'react';
import style from './rate.module.css';
import PropTypes from 'prop-types';

const Rate = ({ rate }) => {
  // const maxRate = 5;
  // const rateUnitHeight = 20;
  // const antiProgress = (maxRate - rate) * rateUnitHeight;

  return (
    <div className={style.progress}>
      {/* <div className={style.anti_progress} style={{ height: antiProgress + "px" }}></div> */}
      <div className={style.text}>{rate}</div>
    </div>
  )
}

Rate.prototypes = {
  rate: PropTypes.number
}

export default Rate;
