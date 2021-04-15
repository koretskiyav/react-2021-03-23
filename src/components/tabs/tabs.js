import React from 'react';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';

import styles from './tabs.module.css';

const Tabs = ({tabs}) => (
    <div className={styles.tabs}>
        {tabs.map(({id, title, link}) => (
            <NavLink
                key={id}
                to={link}
                className={styles.tab}
                activeClassName={styles.active}
            >
                {title}
            </NavLink>
        ))}
    </div>
);

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};

export default Tabs;
