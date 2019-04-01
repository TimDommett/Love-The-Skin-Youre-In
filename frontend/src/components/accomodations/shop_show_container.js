// import { connect } from "react-redux";
// import { fetchAccomodation } from "../../actions/accomodation_actions";
// import ShopShow from "./shop_show";
// import { fetchUserAccomodations } from '../../actions/accomodation_actions';

const mapStateToProps = state => {
  return {
    accomodation: Object.values(state.accomodation.id),
    // currentUser: state.session.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAccomodation: id => dispatch(fetchAccomodation(id))
  };
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ShopShow);
