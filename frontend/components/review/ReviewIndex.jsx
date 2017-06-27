import React from 'react';
import ReviewIndexItem from './ReviewIndexItem';
import ReviewFormContainer from './form/ReviewFormContainer';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.currentRoom);
  }

  render() {
    const { reviews } = this.props;
    const reviewItems = reviews.map( review => <ReviewIndexItem key={review.id} review={review} />);

    return (
      <section className="review-index">
        <h3>Reviews</h3>
        <ul>
          { reviewItems }
        </ul>
        <ReviewFormContainer />
      </section>
    );
  }
}

export default ReviewIndex;
