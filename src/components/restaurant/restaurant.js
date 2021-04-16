import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { useParams } from 'react-router-dom'
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';


const Restaurant = ({ restaurant, averageRating }) => {
  let { activeTab } = useParams()
  if (!activeTab) activeTab = 'menu'
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
      <Tabs tabs={tabs} activeId={activeTab ? activeTab : 'menu'} restaurantId={id}/>
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
