
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
        return <div></div>;
    } else {
      return (
        <div className="accomodations_container">
          <h2>All Accomodations</h2>
          {this.state.accomodations.map(accomodation => (
            <AccomodationBox
              key={accomodation._id}
              title={accomodation.title}
              text={accomodation.text}
              link={accomodation.link}
              price={accomodation.price}
            />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Accomodation);