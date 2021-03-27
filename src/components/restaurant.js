import Rate from './rate';
import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant(props) {
  const {
    reviews,
    menu,
  } = props.restaurant;
  const rating = [...reviews].reduce((sum, { rating }) => sum + rating, 0) / reviews.length;

  return (
    <div className="restaurant">
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <Rate value={rating} />
    </div>
  );
}
