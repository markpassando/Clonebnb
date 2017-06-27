import React from 'react';
import { Link } from 'react-router-dom';

const TripIndexItem = ({ trip }) => {
  const imgStyle = {
    height: "100%",
    width: "100%",
    backgroundImage: `url(${trip.room.room_pic_url})`
  };

  return (
    <li className="trip-item">
      <section>
        <div className="room-index-img-box">
          <Link to={`/rooms/${trip.room.id}`}>
            <div className="room-index-img" style={imgStyle}></div>
            <div className="host-container">
                <img src={trip.room.host_pic_url} />
            </div>
          </Link>
        </div>

        <div className="trip-info item">
          <Link className="trip-link" to={`/rooms/${trip.room.id}`}>{trip.room.title}</Link>
          <p>{trip.check_in} - {trip.check_out}</p>
          <p><strong>Status: </strong>{trip.status}</p>
          <p>{trip.num_guests} Guests</p>

          <div className="receipt-box">
            <Link className="receipt-link" to={`/trips/${trip.id}`}>View Receipt</Link>
          </div>
        </div>
      </section>
    </li>
  );
}

export default TripIndexItem;
