
import { connect } from 'react-redux';
import { composeReview } from '../../actions/review_actions';
import ReviewCompose from './review_compose';

const mapStateToProps = (state) => {
    return {
        // currentAccomodation: accomodation._id,
        newReview: state.reviews.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        composeReview: data => dispatch(composeReview(data))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewCompose);