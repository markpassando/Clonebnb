import * as APIUtil from '../util/room_api_util';

export const RECEIVE_ROOMS = 'RECEIVE_ROOMS';
export const RECEIVE_ROOM = 'RECEIVE_ROOM';

export const receiveRooms = rooms => {
  return ({
    type: RECEIVE_ROOMS,
    rooms
  });
};

export const receiveRoom = room => ({
  type: RECEIVE_ROOM,
  room
});

export const fetchRooms = () => dispatch => (
  APIUtil.fetchRooms().then(rooms => (
    dispatch(receiveRooms(rooms)),
    console.error
  ))
);

export const fetchRoom = id => dispatch => (
  APIUtil.fetchRoom(id).then(room => (
    dispatch(receiveRoom(room)),
    console.error
  ))
);

export const createRoom = room => dispatch => (
  APIUtil.createRoom(room).then(room => (
    dispatch(receiveRoom(room)),
    console.error
  ))
);
