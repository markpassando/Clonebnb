import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import roomsReducer from './rooms_reducer';
import reviewsReducer from './reviews_reducer';
import filtersReducer from './filters_reducer';
import modalReducer from './modal_reducer';
import tripReducer from './trip_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  trips: tripReducer,
  rooms: roomsReducer,
  reviews: reviewsReducer,
  filters: filtersReducer,
  modal: modalReducer
});

export default rootReducer;
