import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewSelector = (state, props) => state.reviews[props.id];
const usersSelector = (state) => state.users;

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

export const reviewTextSelector = createSelector(
  reviewSelector,
  (review) => review.text
);

export const reviewRatingSelector = createSelector(
  reviewSelector,
  (review) => review.rating
);

export const reviewUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => users[review.userId].name
);
