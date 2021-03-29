import React from 'react';

import style from './rate.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate(props) {
  const allStars = [];
  let starIndex = 0;
  while (starIndex < 5) {
    if (starIndex < props.rating) {
      allStars.push(
        <Star key={'star_' + starIndex} className={style.ratedIcon} />
      );
    } else {
      allStars.push(<Star key={'star_' + starIndex} className={style.icon} />);
    }
    starIndex++;
  }

  return <div>{allStars}</div>;
}
