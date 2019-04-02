
import axios from 'axios';

export const getReviews = () => {
    return axios.get('/api/reviews')
};

export const getAccomodationReviews = id => {
    return axios.get(`/api/reviews/accomodation/${id}`);
};

export const writeReview = data => {
    return axios.post("/api/reviews/", data);
};