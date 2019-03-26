
import { connect } from 'react-redux';
import { fetchAccomodations } from '../../actions/accomodation_actions';
import Accomodations from "./accomodations";
import AccomodationsReducer from '../../reducers/accomodations_reducer';

const mapStateToProps = (state) => {
    return {
        accomodations: Object.values(state.accomodations.all)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAccomodations: () => dispatch(fetchAccomodations())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accomodations);