
import React from 'react';
import { withRouter } from 'react-router-dom';
import ReviewBox from "./review_box";

class Review extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          reviews: [],
          accomodation: this.props.accomodation

        };
    }

    componentWillMount() {
        this.props.fetchReviews();
    }

    componentWillReceiveProps(newState) {
        this.setState({ reviews: newState.reviews });
    }

    // order by rating

    render() {
        const acc = this.state.accomodation;
        const filteredReviews = this.state.reviews.filter(review => {
          if (review.accomodation != undefined ) {
            return (
              review.accomodation.indexOf(
                this.state.accomodation
              ) !== -1
            );
          }

        })
        // const sortedPosts = filteredPosts.sort((a, b) => b.votes - a.votes);
        if (this.state.reviews.length === 0) {
            return <div></div>;
        } else {
            return (
              <div className="reviews_container">
                <h2 className="shops-title">Reviews:</h2>
                {filteredReviews.map(review => (
                  <ReviewBox
                    key={review._id}
                    comment={review.comment}
                    rating={review.rating}

                  />
                ))}
              </div>
            );
        }
    }
}

export default withRouter(Review);