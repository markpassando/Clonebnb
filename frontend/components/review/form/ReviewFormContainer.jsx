import React from 'react';
import { connect } from 'react-redux';
import { createReview, updateReview, fetchReview, clearReviewErrors } from '../../../actions/review_actions';
import ReviewForm from './ReviewForm';


const mapStateToProps = (state) => ({
  errors: state.reviews.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
// debugger
  const processForm = (ownProps.editedForm) ? updateReview : createReview;
  return({
    processForm: review => dispatch(processForm(review)),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    fetchReview: (id) => dispatch(fetchReview())
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
