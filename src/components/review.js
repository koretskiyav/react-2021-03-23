import React from 'react';
import Rate from './rate';

function Review(props) {
  return (
    <div className="card">
      <h3 className="flex-between">
        {props.review.user}
        <Rate value={props.review.rating}/>
      </h3>
      <p className="flex-between">
        {props.review.text}
      </p>
    </div>
  );
}

export default Review;
