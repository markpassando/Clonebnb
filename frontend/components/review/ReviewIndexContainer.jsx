import React from 'react';
import { connect } from 'react-redux';
import { fetchReviews } from '../../actions/review_actions';
import { selectAllReviews } from '../../reducers/selectors';
import { showModal } from '../../actions/modal_actions';
import { createReview, updateReview, deleteReview, fetchReview, clearReviewErrors } from '../../actions/review_actions';
import ReviewIndex from './ReviewIndex';
import ReviewFormContainer from './form/ReviewFormContainer';
import LogInFormContainer from '../session_form/LogInFormContainer';

const mapStateToProps = (state) => {
  let userReviewed;
  if (state.session.currentUser) {
    userReviewed = selectAllReviews(state).find((review) => review.user_id === state.session.currentUser.id)
  }
// debugger
  return ({
    reviews: selectAllReviews(state),
    userReviewed: userReviewed,
    currentUser: state.session.currentUser

  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchReviews: (roomId) => dispatch(fetchReviews(roomId)),
    deleteReview: (review) => dispatch(deleteReview(review)),
    showCreateReview: () => dispatch(showModal(
      <ReviewFormContainer currentRoom={ownProps.currentRoom} formType={'create'}/>
    )),
    showEditReview: (userReviewed) => dispatch(showModal(
      <ReviewFormContainer currentRoom={ownProps.currentRoom} formType={'edit'} userReviewed={userReviewed} />
    )),
    showLogIn: () => dispatch(showModal(<LogInFormContainer formType={'login'}/>))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
