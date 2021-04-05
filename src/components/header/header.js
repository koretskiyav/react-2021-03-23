import React from 'react';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as BasketIcon } from '../../icons/basket.svg';

import styles from './header.module.css';
import { PropTypes } from 'prop-types';

const Header = ({ setIsOpen, order }) => {
  const sumObj = (o) => Object.values(o).reduce((sum, n) => sum + n, 0);

  return (
    <header className={styles.header}>
      <Logo />
      <button onClick={setIsOpen} className={styles.iconBtn}>
        <BasketIcon />
        <div className={styles.productAmount}>{sumObj(order)}</div>
      </button>
    </header>
  );
};

Header.propTypes = {
  setIsOpen: PropTypes.func,
  order: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Header;
