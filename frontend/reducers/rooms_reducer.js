import merge from 'lodash/merge';

import {
  RECEIVE_ROOMS,
  RECEIVE_ROOM
} from '../actions/room_actions';

const defaultState = {
  entities: {},
  currentRoom: null,
};


const roomReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ROOMS:
      return merge(newState, { entities: action.rooms });

    case RECEIVE_ROOM:
      return merge( newState,{
        entities: { [action.room.id]: action.room },
        currentRoom: action.room.id
      });

    default:
      return state;
  }

};

export default roomReducer;
