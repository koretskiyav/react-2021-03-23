import React from 'react';
import Product from '../Product/Product';
import styles from './Menu.module.css';

export default function Menu(props) {
  return (
    <section>
      <h2>Menu</h2>
      <div className={styles.wrapper}>
        {props.menu.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
