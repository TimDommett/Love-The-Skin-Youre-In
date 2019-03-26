
import axios from 'axios';

export const getAccomodations = () => {
    return axios.get('/api/accomodations')
};

export const getUserAccomodations = id => {
         return axios.get(`/api/accomodations/user/${id}`);
       };

export const writeAccomodation = data => {
         return axios.post("/api/accomodations/", data);
       };