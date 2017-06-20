import React from 'react';

const RoomDetail = ({ room }) => {

  return (
    <div>
      <h2>{room.title}</h2>
      {room.address}
      {room.host_id}

      <div>
        <h3>About this listing</h3>
        <p>{room.description}</p>
      </div>

      <div>
        <h3>The space</h3>
        <ul>
          <li>Accommodates: <strong>{room.num_guests}</strong></li>
          <li>Bathrooms: <strong>ADD TO DB</strong></li>
          <li>Bedrooms: <strong>{room.bedrooms}</strong></li>
          <li>Beds: <strong>{room.beds}</strong></li>
          <li>Check In: <strong>ADD TO DB</strong></li>
          <li>Check Out: <strong>ADD TO DB</strong></li>
          <li>Property type: <strong>{room.prop_type}</strong></li>
          <li>Room type: <strong>{room.room_type}</strong></li>
        </ul>
      </div>

      <div>
        <h3>Amenities</h3>
        <ul>
          <li>Wireless Internet {room.wifi ? "yes" : "no"}</li>
          <li>Kitchen {room.kitchen ? "yes" : "no"}</li>
          <li>Air conditioning {room.ac ? "yes" : "no"}</li>
          <li>TV {room.tv ? "yes" : "no"}</li>
        </ul>
      </div>

      <div>
        <h3>Prices</h3>
        <ul>
          <li>Extra people: <strong>No Charge</strong></li>
          <li>Weekly Discount: <strong>{Math.floor(Math.random() * 10) + 5  }%</strong></li>
          <li>Cleaning Fee: <strong>${ Math.floor(room.price / 8) }</strong></li>
        </ul>
        <strong>Always communicate through Clonebnb</strong>
        <p>To protect your payment, never transfer money or communicate outside of the Clonebnb website or app.</p>
      </div>

      <div>
        <h3>Description</h3>
        <p>{room.description}</p>
      </div>

      <div>
        <h3>Safety features</h3>
        <ul>
          <li>Smoke detector</li>
          <li>Carbon monoxide detector</li>
        </ul>
      </div>
    </div>
  );
};

export default RoomDetail;
