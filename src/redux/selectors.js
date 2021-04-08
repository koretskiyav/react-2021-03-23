import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;

export const currentRestaurant = (state, restaurantId) => state.restaurants[restaurantId];
export const currentUser = (state, userId) => state.users[userId];

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


export const restIdsSelector = createSelector(
  restaurantsSelector,
  (restaurants) => Object.keys(restaurants)
);

export const restTabs = createSelector(
  restaurantsSelector,
  (restaurants) => Object.entries(restaurants)
    .map(([ key, { name }]) => ({ id: key, title: name}))
);

export const currentReviews = createSelector(
  currentRestaurant,
  reviewsSelector,
  (restaurant, reviews) => restaurant.reviews
    .map((reviewId) => reviews[reviewId])
);
