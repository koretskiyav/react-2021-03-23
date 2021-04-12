import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';
import Loader from "../loader";
import {loadUsers,loadRevievs} from "../../redux/actions";
import {
    reviewsLoadedSelector,
    userListSelector,
    reviewsLoadingSelector
} from "../../redux/selectors";

const Reviews = ({reviews, restaurantId, loadReviews,loading,loaded,loadUsers,loadedUsers}) => {
    useEffect(() => {
        (loadUsers.length===0) && loadUsers();
        loadReviews(restaurantId);
    }, [loadReviews, restaurantId,loadUsers,loadedUsers]);
    if(loading||!loaded) return <Loader/>

    return (
        <div className={styles.reviews}>
            {reviews.map((id) => (
                <Review key={id} id={id}/>
            ))}
            <ReviewForm restaurantId={restaurantId}/>
        </div>
    );
};

Reviews.propTypes = {
    restaurantId: PropTypes.string,
    reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default connect((state)=>({
    loadUsers: userListSelector(state),
    loading: reviewsLoadingSelector(state),
    loaded: reviewsLoadedSelector(state),
}), {loadReviews,loadUsers})(Reviews);
