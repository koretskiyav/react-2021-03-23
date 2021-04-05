import styles from './basket.module.css';
import { connect } from 'react-redux';

const Basket = ({ basket, total }) => {
  const productsArray = [];

  for (let key in basket) {
    productsArray.push({ product: basket[key], id: key});
  }

  return(
    <div>
      <h2>Basket: </h2>
      {productsArray.map((item) => {
        return <div key={item.id}>
          <p>{item.product.name}</p>
          <p>{item.product.amount}</p>
          <p>{item.product.totalForProduct}</p>
        </div>
      })}
      <h4>Total:</h4>
      <div>{total}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  basket: state.basket,
  total: state.basket.total
});

// const mapDispatchToProps = (dispatch, props) => ({
//   increment: () => dispatch(increment(props.product.id)),
//   decrement: () => dispatch(decrement(props.product.id)),
// });

export default connect(mapStateToProps)(Basket);
