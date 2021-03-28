import React from 'react';
import style from './rate.module.css';

const star = '\u2605';
const shallowStar = '\u2606';

export default function Rate(props) {
  const floorRating = Math.floor(props.rating);
  const displayRating = props.rating.toString().substr(0, 4);

  const stars =
    star.repeat(floorRating) +
    shallowStar.repeat(5 - floorRating) +
    '\t' +
    displayRating;

  return <p className={style.stars}>{stars}</p>;
}
