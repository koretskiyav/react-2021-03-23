import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decrement, increment, deleteItems } from '../../redux/actions';

const Basket = ({
  purchases,
  restaurants,
  increment,
  decrement,
  deleteItems,
}) => {
  const orders = purchases;

  let findProductByID = (restaurants, id) => {
    let product;
    for (let restaurant of restaurants) {
      product = restaurant.menu.find((item) => item.id === id);
      if (product) return product;
    }
  };

  let returnFullPrice = (restaurants, orders) => {
    let sum = 0;
    let arrayEntries = Object.entries(orders);
    for (let order of arrayEntries) {
      sum = sum + findProductByID(restaurants, order[0]).price * order[1];
    }
    return sum;
  };

  return (
    <div>
      {Object.keys(orders).length ? (
        <div>
          <p>В вашем заказе:</p>
          {Object.keys(orders).map((value, index) => (
            <div key={value}>
              <hr />
              <p>
                {findProductByID(restaurants, value).name} - в заказе:
                {orders[value]} шт. Общая стоимость:{' '}
                {findProductByID(restaurants, value).price * orders[value]}$
              </p>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  decrement(value);
                }}
              >
                -
              </button>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  increment(value);
                }}
              >
                +
              </button>
              <button
                onClick={(evt) => {
                  evt.preventDefault();
                  deleteItems(value);
                }}
              >
                удалить
              </button>
              <hr />
            </div>
          ))}
          <p>
            Всего в заказе: {Object.values(orders).reduce((a, b) => a + b)} шт.
            Общей стоимостью {returnFullPrice(restaurants, orders)}$
          </p>
        </div>
      ) : (
        <div>У вас в корзине пока нет заказов</div>
      )}
    </div>
  );
};

Basket.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  purchases: PropTypes.string.isRequired,
  deleteItems: PropTypes.func,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  increment: (id) => dispatch(increment(id)),
  decrement: (id) => dispatch(decrement(id)),
  deleteItems: (id) => dispatch(deleteItems(id)),
});

const mapStateToProps = (state) => ({
  purchases: state.order,
  restaurants: state.restaurants,
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
