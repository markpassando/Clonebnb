import merge from 'lodash/merge';

import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  RECEIVE_REVIEW_ERRORS
} from '../actions/review_actions';

const defaultState = {
  entities: {},
  currentReview: null,
  errors: []
};


const reviewsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      // return merge(newState, { entities: action.reviews });
      return merge({}, defaultState, { entities: action.reviews })

    case RECEIVE_REVIEW:
      return merge( newState,{
        entities: { [action.review.id]: action.review },
        currentReview: action.review.id
      });

    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors: action.errors
      });

    default:
      return state;
  }

};

export default reviewsReducer;
