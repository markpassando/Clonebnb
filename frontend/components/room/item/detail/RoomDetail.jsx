import React from 'react';

const RoomDetail = ({ room }) => {

  return (
    <div>
      <div className="rm-detail-title rm-detail-bottom">
        <div>
          <h2>{room.title}</h2>
          <p>{room.address}</p>
        </div>
        <div className="host-container">
          <div>
            <img src={room.host.avatar_url} />
          </div>
          <div>
            <p>{room.host.username}</p>
          </div>
        </div>
      </div>

      <div className="rm-detail-bottom rm-icon-list">
        <div className="room-icon-item">
          <img src={ window.images.icon_home } alt="Home Icon" />
          <p>{room.room_type}</p>
        </div>

        <div className="room-icon-people">
          <img src={ window.images.icon_people } alt="People Icon" />
          <p>{room.num_guests} Guests</p>
        </div>

        <div className="room-icon-door">
          <img src={ window.images.icon_door } alt="Door Icon" />
          <p>{room.bedrooms} Bedrooms</p>
        </div>

        <div className="room-icon-bed">
          <img src={ window.images.icon_bed } alt="Bed Icon" />
          <p>{room.beds} Beds</p>
        </div>
      </div>

      <div className="rm-detail-bottom rm-refund">
        <div>
          <img src={ window.images.icon_pig } alt="BPig Icon" />
        </div>
        <div>
          <strong>100% refundable</strong>
          <p>Cancel up to 5 days before your trip and get a full refund, including service fees.</p>
        </div>
      </div>

      <div className="rm-detail-bottom">
        <h3>About this listing</h3>
        <p>{room.description}</p>
      </div>

      <div className="rm-detail-box">
        <div className="box-title">
          <h4>The space</h4>
        </div>
        <div className="box-info rm-detail-list">
          <ul>
            <li>Accommodates: <strong>{room.num_guests}</strong></li>
            <li>Bathrooms: <strong>{room.bathrooms}</strong></li>
            <li>Bedrooms: <strong>{room.bedrooms}</strong></li>
            <li>Beds: <strong>{room.beds}</strong></li>
          </ul>
          <ul>
            <li>Check In: <strong>Anytime after 3PM</strong></li>
            <li>Check Out: <strong>11AM</strong></li>
            <li>Property type: <strong>{room.prop_type}</strong></li>
            <li>Room type: <strong>{room.room_type}</strong></li>
          </ul>
        </div>
      </div>

      <div className="rm-detail-box">
        <div className="box-title">
          <h4>Amenities</h4>
        </div>
        <div className="box-info rm-detail-list rm-detail-amen">
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
        <div className="box-title">
          <h4>Prices</h4>
        </div>
        <div className="box-info">
          <ul>
            <li>Extra people: <strong>No Charge</strong></li>
            <li>Weekly Discount: <strong>10%</strong></li>
            <li>Cleaning Fee: <strong>${ Math.floor(room.price / 8) }</strong></li>
          </ul>
          <div className="price-disclaimer">
            <strong>Always communicate through Clonebnb</strong>
            <p>To protect your payment, never transfer money or communicate outside of the Clonebnb website or app.</p>
          </div>
        </div>
      </div>

      <div className="rm-detail-box">
        <div className="box-title">
          <h4>Description</h4>
        </div>
        <div className="box-info">
          <p>{room.description}</p>
        </div>
      </div>

      <div className="rm-detail-box">
        <div className="box-title">
          <h4>Safety features</h4>
        </div>
        <div className="box-info">
          <ul>
            <li>Smoke detector</li>
            <li>Carbon monoxide detector</li>
          </ul>
        </div>
      </div>

      <div className="rm-detail-box">
        <div className="box-title">
          <h4>House Rules</h4>
        </div>
        <div className="box-info">
          <p>{room.rules}</p>
        </div>
      </div>

    </div>
  );
};

export default RoomDetail;
