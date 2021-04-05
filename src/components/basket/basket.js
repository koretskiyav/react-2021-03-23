import styles from './basket.module.css';
import store from '../../redux/store';
import { decrement, increment } from '../../redux/actions';
import { connect } from 'react-redux';

const Basket = ({ basket }) => {
  // const products = store.getState().order;
  // const productsArray = [];

  // for (let item in products)
  // {
  //   productsArray.push({ id: item.id, name: item.name });
  // }

  // return <div>
  //   <h2>Basket: </h2>
  //   {productsArray.map((product) => {
  //     <ProductInfo product={product} />
  //   })}
  // </div>

  const productsArray = [];

  for (let key in basket) {
    productsArray.push(basket[key]);
  }

  return(
    <div>
      <h2>Basket: </h2>
      {productsArray.map((item) => {
        return <div>{item.name}</div>
      })}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  // amount: state.order[props.product.id] || 0,
  basket: state.basket
});

// const mapDispatchToProps = (dispatch, props) => ({
//   increment: () => dispatch(increment(props.product.id)),
//   decrement: () => dispatch(decrement(props.product.id)),
// });

export default connect(mapStateToProps)(Basket);
