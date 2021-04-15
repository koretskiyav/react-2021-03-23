import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './tabs.module.css';

const Tabs = ({ tabs, activeId, onChange }) => (
  <div className={styles.tabs}>
    {tabs.map(({ id, title, to }) => (
      <span
        key={id}
        className={cn(styles.tab, { [styles.active]: id === activeId })}
        onClick={() => onChange && onChange(id)}
      >
        {to ? (
          <NavLink key={id} to={to} className={styles.tab}>
            {title}
          </NavLink>
        ) : (
          title
        )}
      </span>
    ))}
  </div>
);

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      to: PropTypes.string,
    }).isRequired
  ).isRequired,
  activeId: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Tabs;
