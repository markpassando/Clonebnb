import { values } from 'lodash';

export const selectAllRooms = ({ rooms }) => values(rooms.entities);
export const selectAllTrips = ({ trips }) => values(trips.entities);
