import React from 'react';

const RoomDetail = ({ room }) => {

  return (
    <div>
      <div className="rm-detail-title rm-detail-bottom">
        <h2>{room.title}</h2>
        <p>{room.address}</p>
        <div>
          <img src={room.host.avatar_url} />
          {room.host.username}
        </div>
      </div>

      <div className="rm-detail-bottom">
        <h3>About this listing</h3>
        <p>{room.description}</p>
      </div>

      <div className="rm-detail-box">
        <div>
          <h4>The space</h4>
        </div>
        <div className="rm-detail-list">
          <ul>
            <li>Accommodates: <strong>{room.num_guests}</strong></li>
            <li>Bathrooms: <strong>{room.bathrooms}</strong></li>
            <li>Bedrooms: <strong>{room.bedrooms}</strong></li>
            <li>Beds: <strong>{room.beds}</strong></li>
          </ul>
          <ul>
            <li>Check In: <strong>ADD TO DB</strong></li>
            <li>Check Out: <strong>ADD TO DB</strong></li>
            <li>Property type: <strong>{room.prop_type}</strong></li>
            <li>Room type: <strong>{room.room_type}</strong></li>
          </ul>
        </div>
      </div>

      <div className="rm-detail-box">
        <div>
          <h4>Amenities</h4>
        </div>
        <div className="rm-detail-list rm-detail-amen">
          <ul>
            <li className={room.wifi ? "" : "no-amen"}>{room.wifi ? <i className="fa fa-wifi" aria-hidden="true"></i> : ""} Wireless Internet</li>
            <li className={room.kitchen ? "" : "no-amen"}>{room.kitchen ? <i className="fa fa-cutlery" aria-hidden="true"></i> : ""} Kitchen</li>
            <li className={room.ac ? "" : "no-amen"}>{room.ac ? <i className="fa fa-snowflake-o" aria-hidden="true"></i> : ""} Air conditioning</li>
            <li className={room.tv ? "" : "no-amen"}>{room.tv ? <i className="fa fa-television" aria-hidden="true"></i> : ""} TV</li>
          </ul>

          <ul>
            <li className={room.wifi ? "" : "no-amen"}>{room.wifi ? <i className="fa fa-paw" aria-hidden="true"></i> : ""} Pets allowed</li>
            <li className={room.kitchen ? "" : "no-amen"}>{room.kitchen ? <i className="fa fa-fire" aria-hidden="true"></i> : ""} Indoor fireplace</li>
            <li className={room.ac ? "" : "no-amen"}>{room.ac ? <i className="fa fa-bath" aria-hidden="true"></i> : ""} Bathtub</li>
            <li className={room.tv ? "" : "no-amen"}>{room.tv ? <i className="fa fa-gamepad" aria-hidden="true"></i> : ""} Game console</li>
          </ul>
        </div>
      </div>

      <div className="rm-detail-box">
        <div>
          <h4>Prices</h4>
        </div>
        <div>
          <ul>
            <li>Extra people: <strong>No Charge</strong></li>
            <li>Weekly Discount: <strong>10%</strong></li>
            <li>Cleaning Fee: <strong>${ Math.floor(room.price / 8) }</strong></li>
          </ul>
          <strong>Always communicate through Clonebnb</strong>
          <p>To protect your payment, never transfer money or communicate outside of the Clonebnb website or app.</p>
        </div>
      </div>

      <div className="rm-detail-box">
        <div>
          <h4>Description</h4>
        </div>
        <div>
          <p>{room.description}</p>
        </div>
      </div>

      <div>
        <h4>Safety features</h4>
        <ul>
          <li>Smoke detector</li>
          <li>Carbon monoxide detector</li>
        </ul>
      </div>
    </div>
  );
};

export default RoomDetail;
