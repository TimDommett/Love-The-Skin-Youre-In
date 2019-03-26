
import { connect } from 'react-redux';
import { fetchUserAccomodations } from '../../actions/accomodation_actions';
import Profile from './profile';
// import { fetchUserAccomodations } from '../../actions/accomodation_actions';

const mapStateToProps = (state) => {
    return {
        accomodations: Object.values(state.accomodations.user),
        currentUser: state.session.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserAccomodations: id => dispatch(fetchUserAccomodations(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);