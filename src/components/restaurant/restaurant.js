import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

import styles from './restaurant.module.css';

const Restaurant = ({ restaurant, averageRating, activeTab }) => {
  const { id, name, menu, reviews } = restaurant;

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
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={`/restaurants/${id}/${tab.id}`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {tab.title}
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
};

// заглушка, если где-то еще используются ссылки вида "/restaurants/:restId"

Restaurant.defaultProps = {
  activeTab: 'menu',
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps)(Restaurant);
