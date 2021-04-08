import { createSelector } from 'reselect';
import logger from "./middleware/logger";

const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const productSelector = (state, props) => state.products[props.id];
const usersSelector = (state) => state.users;
const reviewsSelector = (state, reviewIds) => [state.reviews, reviewIds];
const reviewSelector = (state, props) => state.reviews[props.id];
const amountSelector = (state, props) => state.order[props.id];

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

export const reviewUserSelector = createSelector(
    usersSelector,
    reviewSelector,
    (users, review) => {
        return users[review.userId];
    }
);

export const productAmountSelector = createSelector(
    amountSelector,
    (amount) => amount || 0
);

export const singleProductSelector = createSelector(
    productSelector,
    (product) => product
);

export const allRestaurantsSelector = createSelector(
    restaurantsSelector,
    (restaurants) => restaurants
);

export const restaurantReviewsSelector = createSelector(
    reviewsSelector,
    ([reviews, reviewIds]) => reviewIds.map((id) => reviews[id])
);

export const singleReviewSelector = createSelector(
    reviewSelector,
    (review) => review
);