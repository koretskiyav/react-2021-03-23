import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import style from './rate.module.css';

const useStarsArray = (len, outOf) => {
  const [starsArray, setStarsArray] = useState([]);
  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < outOf; i++) {
      newArray.push(i < len ? 1 : 0);
    }
    setStarsArray(newArray);
  }, [len, outOf, setStarsArray]);

  return {
    starsArray,
  };
};

function Rate(props) {
  const { className, value, outOf = 5 } = props;
  const { starsArray } = useStarsArray(value, outOf);
  return (
    <div className={classnames(style.rate, className)}>
      <span className={style.rate__sign}>Rate:</span>
      {starsArray.map((v, i) => (
        <span
          key={i}
          className={classnames(
            style.rate__star,
            v === 1 && style.rate__star_active
          )}
        >
          *
        </span>
      ))}
      [{value}]
    </div>
  );
}

export default Rate;
