
import { connect } from 'react-redux';
import { fetchAccomodations } from '../../actions/accomodation_actions';
import MainPage from "./main_page";

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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);