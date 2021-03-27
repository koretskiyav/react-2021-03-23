import Rate from './rate';
import Menu from './menu';
import Reviews from './reviews';
import style from './restaurant.module.css';

export default function Restaurant(props) {
  const {
    name,
    reviews,
    menu,
  } = props.restaurant;
  const rating = [...reviews].reduce((sum, { rating }) => sum + rating, 0) / reviews.length;

  return (
    <div className="restaurant">
      <div className={style.restaurant__heading}>
        <h2>{name}</h2>
        <Rate value={rating} className={style.restaurant__rating} />
      </div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}
