import React from 'react';
import { connect } from 'react-redux';
import OrderedProduct from './ordered-product';

const Basket = ({restaurants, order}) => {
console.log("hello");
const arr = []
  Object.keys(order).forEach((idProd) => (
    restaurants.forEach((restaurant) => (
      restaurant.menu.find(
        prod => prod.id == idProd)?
        arr.push(restaurant.menu.find(prod => prod.id == idProd))
        :null))))
console.log(arr);
return (
  <div>
    {arr.map((product) => (
      <OrderedProduct key={product.id} product={product} />
    ))}
  </div>
  );
};
//
const mapStateToProps = (state, props) => ({
  order: state.order,
});
//
// function mapDispatchToProps() {
//
// }
//
 export default connect(mapStateToProps)(Basket);
