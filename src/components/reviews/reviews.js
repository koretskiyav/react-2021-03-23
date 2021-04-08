import React from 'react';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({reviewIds, restId}) => {
    return (
        <div className={styles.reviews}>
            {reviewIds.map((reviewId) => (
                <Review key={reviewId} id={reviewId} />
            ))}
            <ReviewForm restId={restId} />
        </div>
    );
};

Reviews.propTypes = {
    reviewIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Reviews;
