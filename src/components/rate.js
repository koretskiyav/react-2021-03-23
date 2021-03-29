import React from 'react';
import style from './rate.module.css';
import { ReactComponent as Star} from '../icons/star.svg';

function Rate(props){

  const rating = props.rate;
  const allRatings=props.allRate;

  const average= (allRatings.reduce((a, b) => (a + b)) / allRatings.length).toFixed(1);

  return(
    <div>
      <p>Average rating: {average}</p>
      <p>Personal rating: {rating}</p>
    </div>
  )
}
export default Rate