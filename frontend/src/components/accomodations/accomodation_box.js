
import React from 'react';

class AccomodationBox extends React.Component {
    render() {
        return (
          <div>
            <h3>{this.props.title}</h3>
            <ul>{this.props.text}</ul>
            <ul>{this.props.link}</ul>
            <ul>{this.props.price}</ul>
          </div>
        );
    }
}

export default AccomodationBox;