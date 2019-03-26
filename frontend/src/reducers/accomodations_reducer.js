
import {
  RECEIVE_ACCOMODATIONS,
  RECEIVE_USER_ACCOMODATIONS,
  RECEIVE_NEW_ACCOMODATION
} from "../actions/accomodation_actions";

const AccomodationsReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_ACCOMODATIONS:
          newState.all = action.accomodations.data;
      return newState;
    case RECEIVE_USER_ACCOMODATIONS:
          newState.user = action.accomodations.data;
      return newState;
    case RECEIVE_NEW_ACCOMODATION:
      newState.new = action.accomodation.data;
      return newState;
    default:
      return state;
  }
};

export default AccomodationsReducer;