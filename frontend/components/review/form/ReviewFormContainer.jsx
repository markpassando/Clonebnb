import React from 'react';
import { connect } from 'react-redux';
import { createReview, clearReviewErrors } from '../../../actions/review_actions';
import ReviewForm from './ReviewForm';


const mapStateToProps = (state) => ({
  errors: state.reviews.errors
});

const mapDispatchToProps = (dispatch) => ({
  createReview: review => dispatch(createReview(review)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
