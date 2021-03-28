import React, {Component} from 'react';
import cls from './restaurant.module.css'
import Menu from "./menu";
import Rate from "./rate";
import Reviews from "./reviews";

class Restaurant extends Component {
    state = {
        isOpenReviews: false,
    };

    calculateAverageRate = () => {
        return Object.values(this.props.restaurant.reviews).reduce((accum, review) => (
            accum + review.rating
        ), 0) / this.props.restaurant.reviews.length;
    }

    render() {
        return (
            <div className={cls.Restaurant}>
                <div className={cls.head}>
                    <h2>{this.props.restaurant.name}</h2>
                    <Rate value={this.calculateAverageRate()}/>
                </div>
                <Menu menu={this.props.restaurant.menu}/>
                <Reviews reviews={this.props.restaurant.reviews}/>
            </div>
        );
    }
}

export default Restaurant;