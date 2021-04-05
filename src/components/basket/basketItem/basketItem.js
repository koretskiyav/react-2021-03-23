import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../../redux/actions';

const BasketItem = ({ item, increment, decrement, remove }) => {
  const { name, price } = item.product;
  const amount = item.amount;
  const sum = amount * price;

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <h5>{price} $</h5>
      </div>
      <div>
        <p>
          Total for {amount} {amount === 1 ? 'item' : 'items'}: {sum} $
        </p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={remove}>x</button>
      </div>
    </div>
  );
};

BasketItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.number.isRequired,
    }).isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  remove: PropTypes.func,
};

const mapDispatchToProps = (dispatch, props) => ({
  increment: () => dispatch(increment(props.item.product.id)),
  decrement: () => dispatch(decrement(props.item.product.id)),
  remove: () => dispatch(remove(props.item.product.id)),
});

export default connect(null, mapDispatchToProps)(BasketItem);
