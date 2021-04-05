import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Basketitem from '../basketitem/basketitem';

const Basket = ({ basketitems, sum }) => {
    return (
        <div className="basket">
            <ul>
                {basketitems.map((basketitem) => (
                    <Basketitem
                        key={basketitem.id}
                        product={basketitem.product}
                        amount={basketitem.amount}
                    />
                ))}
            </ul>
            <p > Sum: {sum}$</p>
        </div>
    );
};

Basket.propTypes = {
    order: PropTypes.object.isRequired,
};

export default connect((state) => {
    const basketitems = Object.keys(state.order).map((id) => ({
        product: state.restaurants
            .flatMap((restaurant) => restaurant.menu)
            .find((product) => product.id === id),
        amount: state.order[id],
    }));
    const sum = basketitems.reduce(
        (acc, basketitem) => acc + basketitem.product.price * basketitem.amount,
        0
    );

    return { basketitems, sum };
})(Basket);