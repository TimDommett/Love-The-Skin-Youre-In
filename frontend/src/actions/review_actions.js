
import { getReviews, getAccomodationReviews, writeReview } from '../utils/review_api_util';

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_ACCOMODATION_REVIEWS = "RECEIVE_ACCOMODATION_REVIEWS";
export const RECEIVE_NEW_REVIEW = "RECEIVE_NEW_REVIEW";

export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
});

export const receiveAccomodationReviews = reviews => ({
    type: RECEIVE_ACCOMODATION_REVIEWS,
    reviews
});

export const receiveNewReview = reviews => ({
    type: RECEIVE_NEW_REVIEW,
    reviews
});

export const fetchReviews = () => dispatch =>
    getReviews()
        .then(reviews => dispatch(receiveReviews(reviews)))
        .catch(err => console.log(err));

export const fetchAccomodationReviews = id => dispatch =>
    getAccomodationReviews(id)
        .then(reviews =>
            dispatch(receiveAccomodationReviews(reviews))
        )
        .catch(err => console.log(err));

export const composeReview = data => dispatch =>
    writeReview(data)
        .then(review => dispatch(receiveNewReview(review)))
        .catch(err => console.log(err));