import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import {
  productsLoadingSelector,
  productsLoadedSelector,
  productsErrorSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

import styles from './menu.module.css';
import { connect } from 'react-redux';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    restautantId: PropTypes.string,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    if (!this.props.loaded && !this.props.loading) {
      return this.props.loadProducts();
    }
  }

  render() {
    if (this.props.loading) return <Loader />;
    if (!this.props.loaded || this.props.error) return 'No products';

    const { menu } = this.props;

    return (
      <div className={styles.menu}>
        <div>
          {menu.map((id) => (
            <Product key={id} id={id} />
          ))}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state, props),
  error: productsErrorSelector(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  loadProducts: () => dispatch(loadProducts(props.restaurantId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
