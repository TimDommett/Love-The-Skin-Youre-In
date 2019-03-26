
import React from 'react';
import AccomodationBox from '../accomodations/accomodation_box';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          accomodations: []
        };
    }

    componentWillMount() {
        console.log(this.props.currentUser.id)
        this.props.fetchUserAccomodations(this.props.currentUser.id);
    }

    componentWillReceiveProps(newState) {
        this.setState({ accomodations: newState.accomodations });
    }

    render() {
        if (this.state.accomodations.length === 0) {
          return <div>This user has no accomodations</div>;
        } else {
          return (
            <div>
              <h2>All of This User's accomodations</h2>
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

export default Profile;