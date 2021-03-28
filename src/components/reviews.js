import Rate from "./rate";

const Reviews = props =>
    (
        <div>
            {props.reviews.map((review) => (
                <div
                    key={review.id}
                >
                    <div>
                        <h3>{review.user}</h3>
                        <Rate value={review.rating}/>
                    </div>
                    <p>
                        {review.text}
                    </p>
                </div>
            ))}
        </div>
    )

export default Reviews;