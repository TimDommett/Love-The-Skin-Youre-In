
import React from 'react';
import "./accomodation.css"
import StarRatingComponent from "react-star-rating-component";


class ShopShow extends React.Component {
    
    render() {
        return (
            <div className=" fade-in" >
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
                    className={"shop-price"}
                />
                <h3 className="shop-title">{this.props.title}</h3>

                <ul>{this.props.text}</ul>
            <ul className="shop-link">{this.props.link}</ul>
                <ul>{this.props.lat}</ul>
       
            </div>
        );
    }
}

export default ShopShow;