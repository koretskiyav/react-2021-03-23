import React, { useCallback } from 'react';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

export default function Restaurants(props) {

  const getActiveRestaurant = useCallback(
    (activeId) => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [props.restaurants]
  );

  return (
    <Tabs data={props.restaurants} titlePropName="name">
      {(activeId) => <Restaurant restaurant={getActiveRestaurant(activeId)} />}
    </Tabs>
  );
}
