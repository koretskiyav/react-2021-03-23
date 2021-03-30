import React from 'react';
import style from './rate.module.css';
import { ReactComponent as Star} from '../icons/star.svg';

function Rate(props){
  const rating = props.rate;
  return(
    <div>
      <p>Personal rating: {rating}</p>
    </div>
  )
}
export default Rate