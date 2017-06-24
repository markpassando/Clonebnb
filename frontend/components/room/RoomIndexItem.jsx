import React from 'react';
import { Link } from 'react-router-dom';

const RoomIndexItem = ({ room }) => {
  let imgStyle = {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${room.main_pic_url})`
  };

  return (
    <li>
      <Link to={`/rooms/${room.id}`}>
        <div className="room-index-img-box">
          <div className="room-index-img" style={imgStyle}></div>
        </div>

        <div>
          <div className="room-index-title">
            <span><strong>${room.price} </strong></span>
            <span><strong>{room.title}</strong></span>
          </div>

          <div className="room-index-detail">
            <span>{room.room_type}</span>
            <span aria-hidden="true"> · </span>
            <span>{room.beds} { room.beds === 1 ? "bed" : "beds" }</span>
          </div>
        </div>
      </Link>
    </li>
  );
}


export default RoomIndexItem;
