
import React from 'react';
import { withRouter } from 'react-router-dom';
import AccomodationBox from "./accomodation_box";

class Accomodation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        accomodations: []
    };
  }

  componentWillMount() {
      this.props.fetchAccomodations();
  }

  componentWillReceiveProps(newState) {
      this.setState({ accomodations: newState.accomodations });
  }

  render() {
      if (this.state.accomodations.length === 0) {
        return <div>There are no Accomodations</div>;
    } else {
      return (
        <div>
          <h2>All Accomodations</h2>
          {this.state.accomodations.map(accomodation => (
            <AccomodationBox
              key={accomodation._id}
              text={accomodation.text}
            />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Accomodation);