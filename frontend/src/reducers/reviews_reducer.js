
import {
    RECEIVE_REVIEWS,
    RECEIVE_ACCOMODATION_REVIEWS,
    RECEIVE_NEW_REVIEW
} from "../actions/review_actions";

const ReviewsReducer = (
    state = { all: {}, review: {}, new: undefined },
    action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_REVIEWS:
            newState.all = action.reviews.data;
            return newState;
        case RECEIVE_ACCOMODATION_REVIEWS:
            newState.review = action.reviews.data;
            return newState;
        case RECEIVE_NEW_REVIEW:
            newState.new = action.review.data;
            return newState;
        default:
            return state;
    }
};

export default ReviewsReducer;