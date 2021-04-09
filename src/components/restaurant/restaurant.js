import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getCurrentRestaurantSelector,
  getRestaurantReviewsIdSelector,
  getAverageReviewRatingSelector,
} from '../../redux/selectors';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant, reviewId, averageRating }) => {
  const { name, menu } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', title: 'Menu' },
    { id: 'reviews', title: 'Reviews' },
  ];

  const content = {
    menu: <Menu menu={menu} key={restaurant.id} />,
    reviews: <Reviews reviewId={reviewId} />,
  }[activeTab];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {content}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array.isRequired,
  }).isRequired,
};

export default connect((state, props) => ({
  restaurant: getCurrentRestaurantSelector(state, props),
  reviewId: getRestaurantReviewsIdSelector(state, props),
  averageRating: getAverageReviewRatingSelector(state, props),
}))(Restaurant);
