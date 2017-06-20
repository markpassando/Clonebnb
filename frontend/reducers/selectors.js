import { values } from 'lodash';

export const selectAllRooms = ({ rooms }) => values(rooms.entities);
