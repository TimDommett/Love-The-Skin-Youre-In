
import React from 'react';
import "./accomodation.css"

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
            <h3 className="shop-title">{this.props.title}</h3>

            <ul>{this.props.text}</ul>
            <ul>{this.props.link}</ul>
            <ul>{this.props.price}</ul>
          </div>
        );
    }
}

export default AccomodationBox;