import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Restaurants from '../restaurants';
import Header from '../header';
class App extends PureComponent {
  state = {
    isOpen: false,
  };

  setIsOpen = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { order } = this.props;

    return (
      <div>
        <Header setIsOpen={this.setIsOpen} order={order} />
        <Restaurants
          restaurants={this.props.restaurants}
          order={order}
          isOpen={this.state.isOpen}
          setIsOpen={this.setIsOpen}
        />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ order }) => {
  return { order };
};

export default connect(mapStateToProps)(App);
