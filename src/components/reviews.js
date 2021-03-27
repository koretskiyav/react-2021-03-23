import Rate from './rate';

import style from './reviews.module.css';

export default function Reviews(props) {
  const { reviews } = props;
  const renderedReviews = reviews
    .map(({ id, user, text, rating }) => (
      <div
        className={style.review}
        key={id}
      >
        <div className={style.review__user}>
          {user}
        </div>
        <div className={style.review__text}>
          {text}
        </div>
        <Rate value={rating} />
      </div>
    ));

  return (
    <div className="reviews">
      <h3>Reviews</h3>
      <div className='reviews__body'>
        {renderedReviews}
      </div>
    </div>
  );
}
