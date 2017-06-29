import merge from 'lodash/merge';

import {
  RECEIVE_REVIEWS,
  RECEIVE_REVIEW,
  DELETE_REVIEW,
  RECEIVE_REVIEW_ERRORS,
  CLEAR_REVIEW_ERRORS
} from '../actions/review_actions';

const defaultState = {
  entities: {},
  currentReview: null,
  errors: {}
};


const reviewsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_REVIEWS:
      // return merge(newState, { entities: action.reviews });
      return merge({}, defaultState, { entities: action.reviews })

    case RECEIVE_REVIEW:
      return merge( newState, state, {
        entities: { [action.review.id]: action.review },
        currentReview: action.review.id
      });

    case DELETE_REVIEW:
      // let newState =  merge({}, state);
      delete newState.entities[action.review.id]
      return newState;

    case RECEIVE_REVIEW_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors: action.errors
      });

    case CLEAR_REVIEW_ERRORS:
      // let newState =  merge({}, state);
      newState.errors = {};
      return newState;

    default:
      return state;
  }

};

export default reviewsReducer;
