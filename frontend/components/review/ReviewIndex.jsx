import React from 'react';
import ReviewIndexItem from './ReviewIndexItem';
import ReviewFormContainer from './form/ReviewFormContainer';

class ReviewIndex extends React.Component {
  componentDidMount() {
    this.props.fetchReviews(this.props.currentRoom);
  }

  render() {
    const { reviews, currentUser, userReviewed } = this.props;
    const reviewItems = reviews.map( review => <ReviewIndexItem key={review.id} review={review} />);
    // const userReviewed = reviews.find((review) => review.user_id === currentUser.id);
// debugger

    // if (!reviews)return null;

    return (
      <section className="review-index">
        <h3>Reviews</h3>
        <ul>
          { reviewItems.length === 0 ? <p>There are no reviews for this room.</p> : reviewItems }
        </ul>

        <h3>{ userReviewed ? 'Edit your Review' : 'Leave a Review' }</h3>
        <h3>{ userReviewed ? userReviewed.body : '' }</h3>

        { userReviewed ? <button onClick={() => this.props.showEditReview(userReviewed)}>Edit Review</button> : <button onClick={this.props.showCreateReview}>Create Review</button> }


      </section>
    );
  }
}

export default ReviewIndex;
// <ReviewFormContainer currentRoom={this.props.currentRoom} editedForm={ Boolean(userReviewed) ? userReviewed : false } />
