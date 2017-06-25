import React from 'react';
import { Link } from 'react-router-dom';
const TripIndexItem = ({ trip }) => {

  return (
    <li>
      <section>
        <Link to={`/rooms/${trip.room.id}`}><img src={trip.room.room_pic_url} /></Link>
        <img src={trip.room.host_pic_url} />
        <Link to={`/rooms/${trip.room.id}`}>{trip.room.title}</Link>
        <p>Status: {trip.status}</p>
        <p>{trip.num_guests} Guests</p>
        <p>{trip.check_in} - {trip.check_out}</p>
        <Link to={`/trips/${trip.id}`}>View Receipt</Link>
      </section>
    </li>
  );
}

export default TripIndexItem;
