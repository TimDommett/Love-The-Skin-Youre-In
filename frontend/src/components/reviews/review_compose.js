
import React from 'react';

import StarRatingComponent from "react-star-rating-component";


class ReviewCompose extends React.Component {
    constructor(props) {
        super(props);
        const acc = this.props.accomodation;
        this.state = {
            comment: "",
            rating: 1,
            accomodation: acc,
       
            newReview: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ newReview: nextProps.newReview.text });
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = {
            comment: this.state.comment,
            rating: this.state.rating,
            accomodation: this.state.accomodation,
            newReview: ""
        };

        this.props.composeReview(review);
        this.setState({
            comment: "",
            rating: 1
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


        return (
            <div>
                <form onSubmit={this.handleSubmit} onKeyPress={this.onKeyPress} className="comment-form">
                    <div>


                        <input
                            type="textarea"
                            value={comment}
                            onChange={this.update("comment")}
                            placeholder="Write your comment here..."
                        />


                        <div>
                            <StarRatingComponent
                                name="rate2"
                                starCount={5}
                                value={rating}

                                onStarClick={this.onStarClick.bind(this)}
                            />
                        </div>
                       
                        <input type="submit" value="Submit" />
                    </div>
                </form>
                <br />

            </div>
        );
    }
}

export default ReviewCompose;