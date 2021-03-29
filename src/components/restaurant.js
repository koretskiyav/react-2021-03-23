import Rate from "./rate";
import Menu from "./menu";
import React, {useMemo} from "react";
import Reviews from "./reviews";

export default function Restaurant(props) {
    const ratingSum = useMemo(() => {
        const total = props.restaurant.reviews.reduce(
            (accumulator, currentReview) => {
                return accumulator + currentReview.rating;
            },
            0
        );
        return (total / props.restaurant.reviews.length).toFixed(0);
    }, [props.restaurant.reviews]);

    return (
        <div>
            <h1>{props.restaurant.name} <Rate stars={ratingSum}/></h1>
            <h2>Menu:</h2>
            <Menu menu={props.restaurant.menu}/>
            <h2>Reviews:</h2>
            <Reviews reviews={props.restaurant.reviews}/>
        </div>
    )
}