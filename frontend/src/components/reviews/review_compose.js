
import React from 'react';
// import AccomodationBox from "./accomodation_box";
// import S3FileUpload from "react-s3";
// import S3 from "aws-s3";
// import Maps from "../maps/maps"
import StarRatingComponent from "react-star-rating-component";



// const keys = require("../../keys");

// const config = {
//     bucketName: "ahomeawayfromhome",
//     dirName: "photos",
//     region: "eu-west-2",
//     accessKeyId: keys.awsAccessKeyID,
//     secretAccessKey: keys.awsSecretAccessKey
// };

// const S3Client = new S3(config);

// const newFileName = 'my-awesome-file';



class ReviewCompose extends React.Component {
    constructor(props) {
        super(props);
        const acc = this.props.accomodation;
        this.state = {
            comment: "",
            // text: "",
            // link: "",
            rating: 1,
            accomodation: acc,
            // photoURL: "",
            // set the default here in photoURL
            newReview: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        // this.upload = this.upload.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newReview: nextProps.newReview.text });
    }

    // upload(e) {

    //     // const fileReader = new FileReader();
    //     // e.preventDefault;
    //     console.log(e.target.files[0]);
    //     S3Client.uploadFile(e.target.files[0])
    //         .then(data =>
    //             this.setState({
    //                 photoURL: data.location
    //             })
    //         )
            // .then(data => console.log(data.location))
    //         .catch(err => console.error(err));
    // };
    // S3FileUpload.uploadFile(e.target.files[0], config)
    //   .then(data => console.log(data.location))
    //   .catch(err => alert(err))

    handleSubmit(e) {
        e.preventDefault();
        // this.setState({accomodation: this.props.accomodation});
        let review = {
            // title: this.state.title,
            comment: this.state.comment,
            // link: this.state.link,
            rating: this.state.rating,
            accomodation: this.state.accomodation,
            // photoURL: this.state.photoURL,
            // lat: this.state.location.lat,
            // lng: this.state.location.lng,
            newReview: ""
        };

        this.props.composeReview(review);
        this.setState({
            comment: "",
            // title: "",
            // link: "",
            rating: 1,
            // photoURL: ""
        });
    }


    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    update(property) {
        return e =>
            this.setState({
                [property]: e.target.value
            });
    }

    onKeyPress(event) {
        if (event.which === 13 /* Enter */) {
            event.preventDefault();
            event.stopPropagation();

            // this.value = this.value + "\n";
        }
    }

    render() {
        const { comment, rating } = this.state;
        // const {accomodation: this.props.accomodation} = this.state;
        // this.state.accomodation = this.props.accomodation;
        // const preview = this.state.photoURL ? <img className="image-preview new-post-form-child" width="100px" alt="" src={this.state.photoURL} /> : null;


        return (
            <div>
                <form onSubmit={this.handleSubmit} onKeyPress={this.onKeyPress} className="comment-form">
                    <div>
                        {/* <input
                            type="text"
                            value={title}
                            onChange={this.update("title")}
                            placeholder="Write your title here..."
                        /> */}

                        <input
                            type="textarea"
                            value={comment}
                            onChange={this.update("comment")}
                            placeholder="Write your comment here..."
                        />

                        {/* <input
                            type="textarea"
                            value={link}
                            onChange={this.update("link")}
                            placeholder="Give a link to your website..."
                        /> */}

                        {/* {preview} */}
                        {/* <input
                            type="file"
                            // value={price}
                            onChange={this.upload} */}
                        {/* // placeholder="Write your review..."
                        /> */}
                        <div>
                            {/* <h2>Rating from state: {price}</h2> */}
                            <StarRatingComponent
                                name="rate2"
                                starCount={5}
                                value={rating}
                                // renderStarIcon={() => <span>$</span>}

                                onStarClick={this.onStarClick.bind(this)}
                            />
                            {/* {this.state.accomodation = this.props.accomodation} */}
                        </div>
                        {/* <select value={price} onChange={this.update("price")}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select> */}
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />
                {/* <ReviewBox text={this.state.newReview} /> */}
                {/* <Maps /> */}
            </div>
        );
    }
}

export default ReviewCompose;