import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../contexts/user-context';

import CurrencySwitcher from '../currency-switcher';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

const Header = () => {
  const { name, setName } = useContext(userContext);

  return (
    <header className={styles.header} onClick={() => setName('Igor')}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <CurrencySwitcher />
      <h2>{name}</h2>
    </header>
  );
};

export default Header;
