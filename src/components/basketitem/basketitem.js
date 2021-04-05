import React from 'react';
import { connect } from 'react-redux';

import {decrement, increment, remove} from "../../redux/actions";
import styles from './basketitem.module.css';
import PropTypes from "prop-types";

const Basketitem = ({product, increment, decrement, remove}) => {
    return (
        <div className={styles.order} key={product.id}>
            <div>{product.name} ({product.amount}) </div>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={remove}>X</button>
                ${product.sum}</div>
        </div>
    )
}



const mapDispatchToProps = (dispatch, ownProps) => ({
    increment: () => dispatch(increment(ownProps.product.id)),
    decrement: () => dispatch(decrement(ownProps.product.id)),
    remove: () => dispatch(remove(ownProps.product.id)),
});

export default connect(null, mapDispatchToProps)(Basketitem);