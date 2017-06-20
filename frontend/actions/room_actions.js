import * as APIUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';

export const receiveRooms = rooms => ({
  type: RECEIVE_ROOMS,
  rooms
});

export const receiveBench = room => ({
  type: RECEIVE_ROOM,
  room
});

export const fetchRooms = filters => dispatch => (
  APIUtil.fetchRooms(filters).then(rooms => (
    dispatch(receiveRooms(rooms))
  ))
);

export const fetchBench = id => dispatch => (
  APIUtil.fetchBench(id).then(room => (
    dispatch(receiveBench(room))
  ))
);

export const createBench = room => dispatch => (
  APIUtil.createBench(room).then(room => (
    dispatch(receiveBench(room))
  ))
);
