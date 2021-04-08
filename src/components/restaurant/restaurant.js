import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant, reviews }) => {
  const { name, menu: productIds, reviews: reviewIds } = restaurant;
  const [activeTab, setActiveTab] = useState('menu');

  const averageRating = useMemo(() => {
    const total = reviewIds.reduce((acc, id) => acc + reviews[id].rating, 0);
    return Math.round(total / reviewIds.length);
  }, [reviewIds, reviews]);

  const tabs = [
    { id: 'menu', title: 'Menu' },
    { id: 'reviews', title: 'Reviews' },
  ];

  const content = {
    menu: <Menu productIds={productIds} key={restaurant.id} />,
    reviews: <Reviews reviewIds={reviewIds} />,
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
    reviewIds: PropTypes.string,
  }).isRequired,
  reviews: PropTypes.shape().isRequired,
};

export default connect((state) => ({
  reviews: state.reviews,
}))(Restaurant);
