import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import { useParams } from 'react-router';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  const matchParams = useParams();
  const activeTab = matchParams.subTab === 'reviews' ? 'reviews' : 'menu';

  const tabs =
    activeTab === 'menu'
      ? [
          { id: 'menu', title: 'Menu' },
          { id: 'reviews', title: 'Reviews', to: `/restaurants/${id}/reviews` },
        ]
      : [
          { id: 'menu', title: 'Menu', to: `/restaurants/${id}` },
          { id: 'reviews', title: 'Reviews' },
        ];

  const content = {
    menu: <Menu menu={menu} key={id} restaurantId={id} />,
    reviews: <Reviews reviews={reviews} restaurantId={id} />,
  }[activeTab];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={(val) => {}} />
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
