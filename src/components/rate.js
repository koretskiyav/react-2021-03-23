import React from 'react';
import style from './rate.module.css';
import { ReactComponent as Star } from '../icons/star.svg';

function Rate(props) {
    return (
        <div className={style.rate}>
            {Array.from({length: 5}, (x, i) => (
                <Star 
                    key={i} 
                    data-index={i + 1}
                    className={i < props.value ? style.selected : ''}
                    onClick={props.onClick}/>
            ))}
        </div>
    )
}

export default Rate

