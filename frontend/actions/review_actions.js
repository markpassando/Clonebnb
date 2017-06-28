import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERRORS';

export const receiveReviews = reviews => {
  return ({
    type: RECEIVE_REVIEWS,
    reviews
  });
};

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => {
  debugger
  return ({
    type: CLEAR_REVIEW_ERRORS
  });
};

export const fetchReviews = (roomId) => dispatch => (
  APIUtil.fetchReviews(roomId).then(reviews => (
    dispatch(receiveReviews(reviews)),
    console.error
  ))
);

export const fetchReview = id => dispatch => (
  APIUtil.fetchReview(id).then(review => (
    dispatch(receiveReview(review)),
    console.error
  ))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(
    review => dispatch(receiveReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON))
  )
);

export const updateReview = review => dispatch => (
  APIUtil.updateReview(review).then(
    review => dispatch(receiveReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON))
  )
);
