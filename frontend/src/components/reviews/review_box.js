
import React from 'react';
// import "./accomodation.css"
import StarRatingComponent from "react-star-rating-component";
// import ShopShow from "./shop_show";


class AccomodationBox extends React.Component {
   
    render() {

      
        return (
            <div >
                <div  className="column fade-in grow">
                    
                    <StarRatingComponent
                        name="rate3"
                        editing={false}
                        starCount={5}
                        value={this.props.rating}
                        className={"shop-rating"}
                    />

                    <ul>{this.props.comment}</ul>
                </div>

            </div>
        );
    }
}

export default AccomodationBox;