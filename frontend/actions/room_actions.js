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

export const fetchRooms = () => dispatch => (
  APIUtil.fetchRooms().then(rooms => (
    dispatch(receiveRooms(rooms)),
    console.error
  ))
);

export const fetchBench = id => dispatch => (
  APIUtil.fetchBench(id).then(room => (
    dispatch(receiveBench(room)),
    console.error
  ))
);

export const createBench = room => dispatch => (
  APIUtil.createBench(room).then(room => (
    dispatch(receiveBench(room)),
    console.error
  ))
);
