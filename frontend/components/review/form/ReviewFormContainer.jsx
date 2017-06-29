import React from 'react';
import { connect } from 'react-redux';
import { hideModal } from '../../../actions/modal_actions';
import { createReview, updateReview, fetchReview, clearReviewErrors } from '../../../actions/review_actions';
import ReviewForm from './ReviewForm';


const mapStateToProps = (state) => ({
  errors: state.reviews.errors
});

const mapDispatchToProps = (dispatch, { formType }) => {

  const processForm = (formType === 'create') ? createReview : updateReview;
  return({
    processForm: review => dispatch(processForm(review)).then(() => dispatch(hideModal())),
    clearReviewErrors: () => dispatch(clearReviewErrors()),
    fetchReview: (id) => dispatch(fetchReview())
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
