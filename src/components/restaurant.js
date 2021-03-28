import React, { useState, useMemo } from 'react';
import Navigation from './navigation';
import Rate from './rate';
import Menu from './menu';
import Reviews from './reviews';
import useCommonRate from '../hooks/use-common-rate';

import style from './restaurant.module.css';

const navLinks = [
  { name: 'Меню', id: 'menu' },
  { name: 'Отзывы', id: 'reviews' }
]

function Restaurant(props) {
  const { menu, reviews } = props.restaurant
  const { rate } = useCommonRate(reviews.map(review => review.rating))
  const [activeId, setActiveId] = useState(navLinks[0].id);
  
  return (
    <div className={style.restaurant}>
      <h1 className="flex-between">
        {props.restaurant.name}
        <Rate value={rate}/>
      </h1>
      <Navigation
        data={navLinks}
        onClick={setActiveId}
        titlePropName="name"
        activeId={activeId}
      />
      <div className={style.main}>
        { activeId === 'menu' ? <Menu menu={menu} /> : <Reviews reviews={reviews} /> }
      </div>
    </div>
  );
}

export default Restaurant;
