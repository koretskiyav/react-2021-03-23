import Reviews from '../reviews';
import Menu from '../menu';
import style from './restaurant.module.css';
import PropTypes from 'prop-types';

const Restaurant = ({ restaurant }) => {
  return (
    <div className={style.container}>
      <Menu menu={restaurant.menu} />
      <div>
        <div>
          <h3>Average rate:</h3>
        </div>
        <Reviews reviews={restaurant.reviews} />
      </div>
    </div>
  )
}

Restaurant.prototypes = {
  restaurant: PropTypes.shape({
    menu: PropTypes.object,
    reviews: PropTypes.array
  }).isRequired
}

export default Restaurant;
