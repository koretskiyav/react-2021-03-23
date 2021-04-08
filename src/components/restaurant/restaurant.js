import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  currentRestaurant,
  currentReviews
} from '../../redux/selectors';

const Restaurant = ({ restaurantId, restaurant, currentReviews }) => {
  const { name, menu, reviews } = restaurant;
  const [activeTab, setActiveTab] = useState('menu');

  const averageRating = useMemo(() => {
    const total = Object.values(currentReviews)
      .reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews, currentReviews]);

  const tabs = [
    { id: 'menu', title: 'Menu' },
    { id: 'reviews', title: 'Reviews' },
  ];

  const content = {
    menu: <Menu menu={menu} key={restaurantId} />,
    reviews: <Reviews reviews={currentReviews} />,
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
  restaurantId: PropTypes.string.isRequired,
  restaurant: PropTypes.shape({
    menu: PropTypes.arrayOf(
      PropTypes.string.isRequired
    ),
    reviews: PropTypes.arrayOf(
      PropTypes.string.isRequired
    )
  }).isRequired
};

const mapStateToProps = (state, props) => ({
  restaurant: currentRestaurant(state, props),
  currentReviews: currentReviews(state, props)
});

export default connect(mapStateToProps)(Restaurant);
