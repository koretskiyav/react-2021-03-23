import React from 'react';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';

import { loadProducts } from '../../redux/actions';
import { connect } from 'react-redux';
import {
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    restaurantId: PropTypes.string.isRequired,
  };

  state = { error: null };

  componentDidCatch(error) {
    this.setState({ error });
  }

  componentDidMount() {
    if ((!this.props.loading, !this.props.loaded)) {
      this.props.dispatch(loadProducts(this.props.restaurantId));
    }
  }

  render() {
    const { menu } = this.props;

    if (this.state.error) {
      return <p>Сейчас меню этого ресторана недоступно :(</p>;
    }

    if (this.props.loading) return <Loader />;
    if (!this.props.loaded) return 'No data :(';

    return (
      <div className={styles.menu}>
        <div>
          {menu?.map((id) => (
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
  loading: productsLoadingSelector(state, props),
  loaded: productsLoadedSelector(state, props),
});

export default connect(mapStateToProps)(Menu);
