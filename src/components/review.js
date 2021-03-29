import React from 'react';
import Rate from './rate'
import style from './review.module.css';

function Review(props){
  const{reviews} = props
  const allRates = reviews.map(el => el.rating)

  return(
    <div>
      {reviews.map(review =>(
        <div key={review.id} className={style.reviewCard}>
          <div>
            <h3>{review.user}</h3>
            <q>{review.text}</q>
          </div>
          <Rate allRate={allRates} rate={review.rating}/>
        </div>
      ))}
    </div>
  )
}

export default Review