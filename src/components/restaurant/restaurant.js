import Reviews from '../reviews';
import Menu from '../menu';
import style from './restaurant.module.css';
import PropTypes from 'prop-types';

const Restaurant = ({ restaurant }) => {
  return (
    <div className={style.container}>
      <Menu menu={restaurant.menu} />
      <div>
        <Reviews reviews={restaurant.reviews} />
      </div>
    </div>
  )
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    menu: PropTypes.array,
    reviews: PropTypes.array
  }).isRequired
}

export default Restaurant;
