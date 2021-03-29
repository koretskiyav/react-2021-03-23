import React, {PureComponent} from 'react';
import Review from './review';
import Rating from './rating';

import style from './review.module.css';

export default class Reviews extends PureComponent {
  render() {
    return <div>
      <div  className={style.label}>
        <Rating rating={this.getAverageRating()} />
      </div>
      <div>
        {this.props.reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  }

  getAverageRating() {
    const ratings = this.props.reviews.map(review => +review.rating);
    const avgRating = ratings.reduce((sum, current) => sum + current) / ratings.length;
    return Math.round(avgRating * 100) / 100;
  }
}
