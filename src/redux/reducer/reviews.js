import {normalizedReviews} from '../../fixtures';
import {REVIEW_SUBMIT} from "../constants";

const defaultReviews = normalizedReviews.reduce(
    (acc, review) => ({...acc, [review.id]: review}),
    {}
);

export default (reviews = defaultReviews, action) => {
    const {type} = action;

    switch (type) {
        case REVIEW_SUBMIT:
            const {review} = action;

            return {
                ...reviews, [review.id]: {
                    id: review.id,
                    rating: review.rating,
                    text: review.text,
                    userId: review.userId,
                }
            };
        default:
            return reviews;
    }
};
