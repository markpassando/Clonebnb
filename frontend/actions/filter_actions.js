import * as APIUtil from '../util/room_api_util';
import { fetchRooms } from './room_actions'
export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilter = (filter, value) => {
  return ({
    type: UPDATE_FILTER,
    filter,
    value
  });
};

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//   dispatch(changeFilter(filter, value));
//   return fetchBenches(getState().filters)(dispatch);
// };

export function updateFilter(filter, value) {
  return (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchRooms(getState().filters)(dispatch);
  };
}
