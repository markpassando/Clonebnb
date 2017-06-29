import React from 'react';
import ReviewIndexItem from './ReviewIndexItem';
import ReviewFormContainer from './form/ReviewFormContainer';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    this.props.fetchReviews(this.props.currentRoom);
  }

  handleCreate() {
    if (this.props.currentUser === null) {
      this.props.showLogIn();
    } else {
      this.props.showCreateReview();
    }
  }

  render() {
    const { reviews, currentUser, userReviewed, showEditReview, deleteReview } = this.props;
    const reviewItems = reviews.map( review => <ReviewIndexItem
                                                  key={review.id}
                                                  review={review}
                                                  currentUser={currentUser}
                                                  userReviewed={userReviewed}
                                                  showEditReview={showEditReview}
                                                  deleteReview={deleteReview}
                                                />);
    // const userReviewed = reviews.find((review) => review.user_id === currentUser.id);


    // if (!reviews)return null;

    return (
      <section className="review-index">
        <h3>Reviews</h3>
        <ul>
          { reviewItems.length === 0 ? <p>There are no reviews for this room.</p> : reviewItems }
        </ul>

        <h3>{ userReviewed ? 'Edit your Review' : 'Leave a Review' }</h3>

        <div className="space-between">
          { userReviewed ? <button className="full-button teal" onClick={() => this.props.showEditReview(userReviewed)}>Edit Review</button> : <button className="full-button teal" onClick={() => this.handleCreate()}>Create Review</button> }
          { userReviewed ? <button className="full-button pink" onClick={() => this.props.deleteReview(userReviewed)}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete Review</button> : '' }
        </div>

      </section>
    );
  }
}

export default ReviewIndex;
// <ReviewFormContainer currentRoom={this.props.currentRoom} editedForm={ Boolean(userReviewed) ? userReviewed : false } />
