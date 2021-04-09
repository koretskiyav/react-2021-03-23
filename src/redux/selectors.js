import { createSelector } from 'reselect';

const restaurantsSelector = (state) => state.restaurants;
const getIdFromRestaurantsProps = (_, props) => props.activeRestaurantId;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
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

export const restaurantInfoSelector = createSelector(
  restaurantsSelector,
  (restaurant) => Object.values(restaurant)
);

export const getCurrentRestaurantSelector = createSelector(
  [restaurantsSelector, getIdFromRestaurantsProps],
  (restaurants, id) =>
    Object.assign(
      {},
      ...Object.values(restaurants).filter((restaurant) => restaurant.id === id)
    )
);

export const getRestaurantReviewsIdSelector = createSelector(
  getCurrentRestaurantSelector,
  (restaurant) => restaurant.reviews
);

export const getReviewsIdSelector = createSelector(
  [reviewsSelector, (_, props) => props.reviewId],
  (reviews, reviewId) =>
    Object.assign(
      {},
      ...Object.values(reviews).filter((restaurant) =>
        reviewId.includes(restaurant.id)
      )
    )
);

export const getAverageReviewRatingSelector = createSelector(
  getRestaurantReviewsIdSelector,
  reviewsSelector,
  (reviewsID, review) => {
    const activeReviews = Object.values(review).filter((review) =>
      reviewsID.includes(review.id)
    );
    const total = activeReviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / activeReviews.length);
  }
);

export const getUsersIdSelector = createSelector(
  [usersSelector, getReviewsIdSelector],
  (users, userId) =>
    Object.assign(
      {},
      ...Object.values(users).filter((user) => user.id.includes(userId.userId))
    )
);
