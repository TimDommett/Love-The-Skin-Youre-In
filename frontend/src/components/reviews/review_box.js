
import React from 'react';
// import "./accomodation.css"
import StarRatingComponent from "react-star-rating-component";
// import ShopShow from "./shop_show";


class AccomodationBox extends React.Component {
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
    //     });
    // }
    render() {

        // let description;
        // if (this.state.description) {
        //     description = (
        //         <div className="whole-page fade-in">
        //             {/* <p className="close-detail" onClick={this.toggleDetail}>Close</p> */}

        //             <button
        //                 onClick={this.toggleDetail}
        //                 className="close-detail"
        //             >
        //                 Close
        //     </button>
        //             <ShopShow
        //                 key={this.props._id}
        //                 title={this.props.title}
        //                 text={this.props.text}
        //                 link={this.props.link}
        //                 price={this.props.price}
        //                 photoURL={this.props.photoURL}
        //             />
        //         </div>
        //     );
        // };
        return (
            <div >
                <div  className="column fade-in grow">
                    {/* <img
                        className="shop-photo"
                        width="100px"
                        src={this.props.photoURL}
                        alt="missing"
                    /> */}
                    <StarRatingComponent
                        name="rate3"
                        editing={false}
                        // renderStarIcon={() => <span>$</span>}
                        starCount={5}
                        value={this.props.rating}
                        className={"shop-rating"}
                    />
                    {/* <h3 className="shop-title">{this.props.title}</h3> */}

                    <ul>{this.props.comment}</ul>
                    {/* <ul>{this.props.link}</ul> */}
                </div>

                {/* {description} */}
            </div>
        );
    }
}

export default AccomodationBox;