import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {connect} from "react-redux";
import {restaurantReviewsSelector} from "../../redux/selectors";

const Restaurant = ({ restaurant, reviews }) => {
  const { name, menu } = restaurant;
  const [activeTab, setActiveTab] = useState('menu');

  const averageRating = useMemo(() => {
    const total = Object.values(reviews).reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  const tabs = [
    { id: 'menu', title: 'Menu' },
    { id: 'reviews', title: 'Reviews' },
  ];

  const content = {
    menu: <Menu menu={menu} key={restaurant.id} />,
    reviews: <Reviews reviewIds={restaurant.reviews} restId={restaurant.id} />,
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
    menu: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default connect((state, props) => {
  return {
    reviews: restaurantReviewsSelector(state, props.restaurant.reviews)
  }
})(Restaurant);
