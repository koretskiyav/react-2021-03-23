import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant, averageRating }) => {
  const { name, menu, reviews } = restaurant;
  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', title: 'Menu' },
    { id: 'reviews', title: 'Reviews' },
  ];

  const content = {
    menu: <Menu menu={menu} key={restaurant.id} />,
    reviews: <Reviews reviews={reviews} />,
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
    menu: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    reviews: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
  }).isRequired,
};

export default connect((state, props) => {
  const reviews = props.restaurant.reviews.map((id) => state.reviews[id]);
  const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
  const averageRating = Math.round(total / reviews.length);
  return {
    averageRating 
  }
})(Restaurant);
