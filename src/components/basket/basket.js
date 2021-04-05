import styles from './basket.module.css';
import { connect } from 'react-redux';
import ProductInfo from './productInfo';

const Basket = ({ basket, total }) => {
  const productsArray = [];

  for (let key in basket) {
    if (key !== 'total') {
      productsArray.push({ product: basket[key], id: key});
    }
  }

  return(
    <div>
      <h2>Basket: </h2>
      {productsArray.map((item) => {
        return <ProductInfo key={item.id} {...item.product} id={item.id} />
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

// const mapDispatchToProps = (dispatch, props) => ({
//   deletePosition: () => dispatch(deletePosition())
// });

export default connect(mapStateToProps)(Basket);
