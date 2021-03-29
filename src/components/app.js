import React, { PureComponent } from 'react';
import Restaurants from './restaurans';

export default class App extends PureComponent {
  state = { value: 0, foo: 'bar' };
  componentDidMount() {
    console.log('Mount');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Updated');
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextState.value === this.state.value &&
  //     nextState.foo === this.state.foo
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

  handleButtonClick = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <Restaurants restaurants={this.props.restaurants}></Restaurants>
      </div>
    );
  }
}
