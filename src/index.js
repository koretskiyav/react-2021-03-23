import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';

import { restaurants } from './fixtures';

function rating() {
  restaurants.map((rest) => {
    let mass = [];
    let summ = 0;

    rest.reviews.map((review) => mass.push(review.rating));
    summ = mass.reduce((total, amount) => total + amount);

    return (rest['averagerating'] = parseInt(summ / mass.length));
  });
}

rating();

ReactDOM.render(
  <App restaurants={restaurants} />,
  document.getElementById('root')
);
