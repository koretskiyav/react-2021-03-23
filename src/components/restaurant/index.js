import React, { useCallback } from 'react';
import Tabs from '../tabs';
import Rate from '../rate';
import Menu from '../menu';
import Reviews from '../reviews';
import useAverage from '../../hooks/use-average';
import style from './restaurant.module.css';

const navLinks = [
  { name: 'Меню', id: 'menu' },
  { name: 'Отзывы', id: 'reviews' }
]

function Restaurant(props) {
  const rate = useAverage(props.restaurant.reviews.map(review => review.rating))

  const getActiveComponent = useCallback(
    (activeId) => activeId === 'menu' 
      ? <Menu menu={props.restaurant.menu} /> 
      : <Reviews reviews={props.restaurant.reviews} />,
    [props.restaurant]
  );
  
  return (
    <div className={style.restaurant}>
      <h1 className="flex-between">
        {props.restaurant.name}
        <Rate value={rate}/>
      </h1>
      <Tabs data={navLinks} titlePropName="name">
        {(activeId) => (
          <div className={style.main}>
            { getActiveComponent(activeId) }
          </div>
        )}
      </Tabs>
    </div>
  );
}

export default Restaurant;
