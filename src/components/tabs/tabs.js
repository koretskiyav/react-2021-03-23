import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './tabs.module.css';



const Tabs = ({ tabs, activeId, restaurantId }) => {
  return (<div className={styles.tabs}>
    {tabs.map(({ id, title }) => (
      <NavLink
        key={id}
        className={styles.tab}
        activeClassName={styles.active}
        to={`/restaurants/${restaurantId}/${id}`}
      >
        {title}
      </NavLink>
    ))}
  </div>)
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  activeId: PropTypes.string.isRequired
};

export default Tabs;
