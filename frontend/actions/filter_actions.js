import * as APIUtil from '../util/room_api_util';
import { fetchRooms } from './room_actions'
export const UPDATE_BOUNDS = "UPDATE_BOUNDS";

export const changeFilter = (bounds) => {
  return ({
    type: UPDATE_BOUNDS,
    bounds
  });
};
//
// export const updateFilter = (filter, value) => (dispatch, getState) => {
//   dispatch(changeFilter(filter, value));
//   return fetchBenches(getState().filters)(dispatch);
// };

export function updateFilter(bounds) {
  return (dispatch, getState) => {
    dispatch(changeFilter(bounds));
    return fetchRooms(getState().filters)(dispatch);
  };
}
