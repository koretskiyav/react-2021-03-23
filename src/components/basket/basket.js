import styles from './basket.module.css';
import { connect } from 'react-redux';
import ProductInfo from './productInfo';

const Basket = ({ basket, total }) => {
  const productsArray = [];

  for (let key in basket.products) {
    productsArray.push({...basket.products[key], id: key});
  }

  return(
    <div>
      <h2>Basket: </h2>
      {productsArray.map((item) => {
        return <ProductInfo key={item.id} {...item} />
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

export default connect(mapStateToProps)(Basket);
