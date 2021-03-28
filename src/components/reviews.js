import React from 'react';

import style from './product.module.css';

export default function Reviews(props) {
  return (
    <div>
      <h1>Review: </h1>

      {props.reviews.map((item) => {
        return (
          <div key={item.id} className={style.reviewers}>
            <p>Name: {item.user}</p>
            <p>review: {item.text}</p>
            <p>rate: {item.rating}</p>
          </div>
        );
      })}
    </div>
  );
}
