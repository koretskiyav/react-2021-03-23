import { createSelector } from 'reselect';

const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

const reviewForIdSelector = (state, props) => state.reviews[props.id];
const usersSelector = (state) => state.users;

export const reviewTextSelector = createSelector(
  reviewForIdSelector,
  (reviewForId) => reviewForId.text
);

export const reviewRatingSelector = createSelector(
  reviewForIdSelector,
  (reviewForId) => reviewForId.rating
);

export const reviewUserNameSelector = createSelector(
  [reviewForIdSelector, usersSelector],
  (reviewForId, users) => users[reviewForId.userId].name
);
