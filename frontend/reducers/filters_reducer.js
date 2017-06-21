import merge from 'lodash/merge';

import { UPDATE_BOUNDS } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {}
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state)
  if (action.type === UPDATE_BOUNDS) {
    const newFilter = { bounds: action.bounds };
    return merge({}, state, newFilter);
  } else {
    return state;
  }
};

export default filtersReducer;
