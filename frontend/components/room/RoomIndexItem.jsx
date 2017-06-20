import React from 'react';
import { Link } from 'react-router-dom';

const RoomIndexItem = ({ room }) => (
  <li>
    <Link to={`/rooms/${room.id}`}>
      <div>IMG GOES HERE</div>

      <div>
        <div>
          <span>${room.price}</span>
          <span>{room.title}</span>
        </div>

        <div>
          <span>{room.room_type}</span>
          <span aria-hidden="true"> · </span>
          <span>{room.beds} { room.beds === 1 ? "bed" : "beds" }</span>
        </div>
      </div>
    </Link>
  </li>
);

export default RoomIndexItem;
