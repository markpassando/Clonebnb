import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import roomsReducer from './rooms_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  rooms: roomsReducer
});

export default rootReducer;
