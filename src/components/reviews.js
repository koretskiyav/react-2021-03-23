import Rate from './rate';

export default function Reviews(props) {
  const { reviews } = props;
  const renderedReviews = reviews
    .map(({ id, user, text, rating }) => (
      <div
        className="review"
        key={id}
      >
        <div className='review__user'>
          {user}
        </div>
        <div className='review__text'>
          {text}
        </div>
        <Rate value={rating} />
      </div>
    ));

  return (
    <div className="reviews">
      {renderedReviews}
    </div>
  );
}
