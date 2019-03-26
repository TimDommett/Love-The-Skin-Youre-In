
import { connect } from 'react-redux';
import { composeAccomodation } from '../../actions/accomodation_actions';
import AccomodationCompose from './accomodation_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newAccomodation: state.accomodations.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeAccomodation: data => dispatch(composeAccomodation(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccomodationCompose);