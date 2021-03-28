import React from 'react';
import { ReactComponent as Star } from '../icons/star.svg';

function Rate(props) {
  const { rating } = props;
  let array = [];
  if (typeof rating === 'number') {
    for (let i = 0; i < rating; i++) {
      array[i] = <Star key={i} />;
    }
  } else if (Array.isArray(rating)) {
    let ratingArr = rating.map((rate) => {
      return rate.rating;
    });
    let averageValue =
      ratingArr.reduce((a, b) => {
        return a + b;
      }) / ratingArr.length;
    array[0] = averageValue.toFixed(1);
  }
  return <div>{array}</div>;
}

export default Rate;
