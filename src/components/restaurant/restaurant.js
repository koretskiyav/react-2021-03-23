import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink, Redirect } from 'react-router-dom';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import styles from './restaurant.module.css';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

const Restaurant = ({ restaurant, activeTab, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  if (!activeTab) {
    return <Redirect to={`/restaurants/${id}/menu`} />;
  }

  const tabs = [
    { id: 'menu', title: 'Menu', url: 'menu' },
    { id: 'reviews', title: 'Reviews', url: 'reviews' },
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
            to={`/restaurants/${id}/${tab.url}`}
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

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps)(Restaurant);
