
import React from 'react';
import "./accomodation.css"
import StarRatingComponent from "react-star-rating-component";


class ShopShow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { description: false };
    //     this.toggleDetail = this.toggleDetail.bind(this);
        // this.handleDelete = this.handleDelete.bind(this)
        // this.deletePost = this.deletePost.bind(this)
        // this.toggleTodo = this.toggleTodo.bind(this);



    // }

    // toggleDetail(e) {
    //     e.preventDefault();
    //     this.setState({
    //         description: !this.state.description,
            // post_id: this.state.id
        // });
    // }
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
            <ul>{this.props.link}</ul>
                {/* {description} */}
                {/* add a map showing where it is and some proper styling */}
            </div>
        );
    }
}

export default ShopShow;