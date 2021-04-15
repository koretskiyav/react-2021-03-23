import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { increment, decrement, remove } from '../../../redux/actions';
import { restaurantMapSelector } from '../../../redux/selectors';
import Button from '../../button';
import styles from './basket-item.module.css';

function BasketItem({
  product,
  amount,
  subtotal,
  increment,
  decrement,
  remove,
  restMap,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <NavLink
          key={product.id}
          to={`/restaurants/${restMap[product.id]}`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          {product.name}
        </NavLink>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button onClick={decrement} icon="minus" secondary small />
          <span className={styles.count}>{amount}</span>
          <Button onClick={increment} icon="plus" secondary small />
        </div>
        <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
        <Button onClick={remove} icon="delete" secondary small />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  remove: () => dispatch(remove(ownProps.product.id)),
});

const mapStateToProps = (state) => {
  return {
    restMap: restaurantMapSelector(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
