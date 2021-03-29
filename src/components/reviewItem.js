import React from 'react';
import Rate from './rate';
import style from './reviewItem.module.css';

function ReviewItem(props) {
  return (
    <div className="item reviews--item">
      <div className="item--author">{props.review.user}</div>
      <div className="item--descr">{props.review.text}</div>
      <div className="item--rate">
        <Rate value={props.review.rating}></Rate>
      </div>
    </div>
  );
}

export default ReviewItem;
