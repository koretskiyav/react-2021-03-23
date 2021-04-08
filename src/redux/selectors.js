import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const usersSelector = (state) => state.users;
const reviewsSelector = (state) => state.reviews;

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

export const fullReviewsSelector = createSelector(
  usersSelector,
  reviewsSelector,
  (users,reviews) =>(
    Object.values(reviews).map((review) => ({
        review,
        id: review.id,
        name: users[review.userId]['name'],
        text: review.text,
        rating: review.rating,
      }
      )
)));


// .map((review)=> review.)


