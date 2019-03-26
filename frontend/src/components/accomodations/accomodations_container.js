
import { connect } from 'react-redux';
import { fetchAccomodations } from '../../actions/accomodation_actions';
import Accomodations from "./accomodations";

const mapStateToProps = (state) => {
    debugger;
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