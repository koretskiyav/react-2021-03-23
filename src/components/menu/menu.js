import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import { restaurantProductsLoadingSelector, restaurantProductsLoadedSelector } from '../../redux/selectors';

import { loadProducts } from '../../redux/actions';

import styles from './menu.module.css';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    const { loading, loaded, restaurantId, loadProducts } = this.props;

    if (!loading && !loaded) loadProducts(restaurantId);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, loading, loaded } = this.props;

    if (loading) return <Loader />;
    if (!loaded) return 'No data :(';

    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }

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
  loading: restaurantProductsLoadingSelector(state, props),
  loaded: restaurantProductsLoadedSelector(state, props),
});

export default connect(mapStateToProps, { loadProducts })(Menu);
