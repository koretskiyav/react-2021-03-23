import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
<<<<<<< HEAD
const reviewsSelector = (state) => state.reviews;
const usersSelector = (state) => state.users;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const restaurantsListSelector = createSelector(
  restaurantsSelector,
  Object.values
);

export const restaurantSelector = (state, { id }) =>
  restaurantsSelector(state)[id];
export const productSelector = (state, { id }) => productsSelector(state)[id];
export const reviewSelector = (state, { id }) => reviewsSelector(state)[id];
export const amountSelector = (state, { id }) => orderSelector(state)[id] || 0;
=======
const reviewSelector = (state, props) => state.reviews[props.id];
const usersSelector = (state) => state.users;
>>>>>>> b5f9bfe384059c9fd0cd8396e07fe7c58a98ab9c

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

<<<<<<< HEAD
export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  restaurantSelector,
  (reviews, restaurant) => {
    const ratings = restaurant.reviews.map((id) => reviews[id].rating);
    return Math.round(
      ratings.reduce((acc, rating) => acc + rating) / ratings.length
    );
  }
=======
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
>>>>>>> b5f9bfe384059c9fd0cd8396e07fe7c58a98ab9c
);
