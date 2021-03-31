import React from 'react';
import style from './rate.module.css';
import { ReactComponent as Star} from '../icons/star.svg';

function Rate(props){
  const rating = props.rate;
  return(
    <div>
      {Array.from({length:5}, (el, index)=>(
        <Star key={index} className={style.iconStar}/>
      ))}
    </div>
  )
}
export default Rate
