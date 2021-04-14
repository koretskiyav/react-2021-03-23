import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
// import Tabs from '../tabs';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

import styles from './restaurant.module.css';

const Restaurant = ({ restaurant, averageRating, tabId }) => {
  const { id, name, menu, reviews } = restaurant;
  const activeTab = tabId || 'menu';

  const tabs = [
    { id: 'menu', title: 'Menu' },
    { id: 'reviews', title: 'Reviews' },
  ];

  const content = {
    menu: <Menu menu={menu} key={id} restaurantId={id} />,
    reviews: <Reviews reviews={reviews} restaurantId={id} />,
  }[activeTab];
  
  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>

      <div className={styles.tabs}>
        {tabs.map(({ id, title }) => (
          <NavLink
            key={`${restaurant.id}-${id}`}
            to={`/restaurants/${restaurant.id}/${id}`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {title}
          </NavLink>
        ))}
      </div>

      {content}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
  tabId: PropTypes.string,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps)(Restaurant);
