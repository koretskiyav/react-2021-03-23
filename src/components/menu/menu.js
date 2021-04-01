import React from 'react';
import Product from '../product';
import PropTypes from 'prop-types';

const Menu = ({ menu }) => {
  return (
    <div>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

Menu.prototypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string
  }).isRequired).isRequired
}

export default Menu;
