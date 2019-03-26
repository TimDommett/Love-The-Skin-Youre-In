
import { getAccomodations, getUserAccomodations, writeAccomodation } from '../utils/accomodation_api_util';

export const RECEIVE_ACCOMODATIONS = "RECEIVE_ACCOMODATIONS";
export const RECEIVE_USER_ACCOMODATIONS = "RECEIVE_USER_ACCOMODATIONS";
export const RECEIVE_NEW_ACCOMODATION = "RECEIVE_NEW_ACCOMODATION";

export const receiveAccomodations = accomodations => ({
         type: RECEIVE_ACCOMODATIONS,
         accomodations
       });

export const receiveUserAccomodations = accomodations => ({
         type: RECEIVE_USER_ACCOMODATIONS,
         accomodations
       });

export const receiveNewAccomodation = accomodations => ({
         type: RECEIVE_NEW_ACCOMODATION,
         accomodations
       });

export const fetchAccomodations = () => dispatch =>
    getAccomodations()
        .then(accomodations => dispatch(receiveAccomodations(accomodations)))
           .catch(err => console.log(err));

export const fetchUserAccomodations = id => dispatch =>
    getUserAccomodations(id)
           .then(accomodations =>
               dispatch(receiveUserAccomodations(accomodations))
           )
           .catch(err => console.log(err));

export const composeAccomodation = data => dispatch =>
    writeAccomodation(data)
        .then(accomodation => dispatch(receiveNewAccomodation(accomodation)))
           .catch(err => console.log(err));