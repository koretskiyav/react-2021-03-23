import classes from './reviews.module.css'
import Rate from "./rate";

const Reviews = props =>
    (
        <div className={classes.Reviews}>
            {props.reviews.map((review) => (
                <div
                    key={review.id}
                    className={classes.item}
                >
                    <div className={classes.head}>
                        <h3>{review.user}</h3>
                        <Rate value={review.rating}/>
                    </div>
                    <p className={classes.body}>
                        {review.text}
                    </p>
                </div>
            ))}
        </div>
    )

export default Reviews;