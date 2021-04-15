import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import styles from './product.module.css';

import { increment, decrement } from '../../redux/actions';

import Button from '../button';
import { amountSelector, productSelector } from '../../redux/selectors';
import { useLocation } from 'react-router';

const Product = ({ id, product, amount, decrement }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const activeRestId = useMemo(() => {
    const idPos = location.pathname.substr(1).search('/');
    if (idPos === -1) {
      return undefined;
    }
    return location.pathname.substr(idPos + 2, 36);
  }, [location.pathname]);

  if (!product) return null;

  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
          <div className={styles.price}>{product.price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <Button onClick={decrement} icon="minus" />
              <Button
                onClick={() => dispatch(increment(id, activeRestId))}
                icon="plus"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
  // from connect
  amount: PropTypes.number,
  decrement: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  amount: amountSelector(state, props),
  product: productSelector(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
