
import React from 'react';
import "./accomodation.css"
import StarRatingComponent from "react-star-rating-component";


class AccomodationBox extends React.Component {
    render() {
        return (
          <div className="column fade-in grow">
            <img
              className="shop-photo"
              width="100px"
              src={this.props.photoURL}
              alt="missing"
            />
            <StarRatingComponent
              name="rate2"
              editing={false}
              renderStarIcon={() => <span>$</span>}
              starCount={5}
              value={this.props.price}
            />
            <h3 className="shop-title">{this.props.title}</h3>

            <ul>{this.props.text}</ul>
            <ul>{this.props.link}</ul>
          </div>
        );
    }
}

export default AccomodationBox;