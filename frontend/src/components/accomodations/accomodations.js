
import React from 'react';
import { withRouter } from 'react-router-dom';
import AccomodationBox from "./accomodation_box";

class Accomodation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        accomodations: []
      // search: "", 
      // selectedOption: "title"
    };
  }

  componentWillMount() {
      this.props.fetchAccomodations();
  }

  componentWillReceiveProps(newState) {
      this.setState({ accomodations: newState.accomodations });
  }

  // order by rating

  render() {
    // const { search, selectedOption } = this.state;
    // const filteredPosts = posts.filter(post => {
    //   if (selectedOption == "title") {
    //     return post.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    //   }
    //   if (selectedOption == "description") {
    //     return post.description.toLowerCase().indexOf(search.toLowerCase()) !== -1
    //   }
    // })
    // const sortedPosts = filteredPosts.sort((a, b) => b.votes - a.votes);
      if (this.state.accomodations.length === 0) {
        return <div></div>;
    } else {
      return (
        <div className="accomodations_container">
          <h2 className="shops-title">All The Shops</h2>
          {this.state.accomodations.map(accomodation => (
            <AccomodationBox
              key={accomodation._id}
              title={accomodation.title}
              text={accomodation.text}
              link={accomodation.link}
              price={accomodation.price}
              photoURL={accomodation.photoURL}
              lat={accomodation.lat}
            />
          ))}
        </div>
      );
    }
  }
}

export default withRouter(Accomodation);