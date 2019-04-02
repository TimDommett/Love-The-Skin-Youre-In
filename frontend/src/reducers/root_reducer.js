import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import accomodations from './accomodations_reducer';
import reviews from './reviews_reducer';

const RootReducer = combineReducers({
    errors,
    session,
    accomodations,
    reviews
});

export default RootReducer;