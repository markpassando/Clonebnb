import React from 'react';
import { Link } from 'react-router-dom';
import RoomImageContainer from '../../room/item/image/RoomImageContainer';

class TripPage extends React.Component {
  componentDidMount() {
    this.props.fetchTrip(this.props.match.params.tripId);
  }

  calculateDays(){
    const { trip } = this.props;
    let checkIn = new Date(trip.check_in);
    let checkOut = new Date(trip.check_out);

    let timeDiff = Math.abs(checkOut.getTime() - checkIn.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return diffDays;
  }

  renderReceipt(){
    const { trip } = this.props;
    const num_nights = this.calculateDays();
    const price_nights = num_nights * trip.room.price;
    const cleaning_fee = Math.floor(trip.room.price / 8);
    const service_fee = Math.floor((price_nights + cleaning_fee) / 8);
    const total = price_nights + cleaning_fee + service_fee;

    return(
      <ul className="price-table">
        <li>
          <div>{`$${trip.room.price} x ${num_nights} nights`}</div>
          <div>{`$${price_nights}`}</div>
        </li>
        <li>
          <div>Cleaning fee</div>
          <div>{`$${cleaning_fee}`}</div>
        </li>
        <li>
          <div>Service fee</div>
          <div>{`$${service_fee}`}</div>
        </li>
        <li>
          <div><strong>Total</strong></div>
          <div><strong>{`$${total}`}</strong></div>
        </li>
      </ul>
    );
  }

  render() {
    const { trip } = this.props;
    if (!trip) return null;

    const imgStyle = {
      height: "100%",
      width: "100%",
      backgroundImage: `url(${trip.room.room_pic_url})`
    };

    return(
      <article>
        <section className="container">
          <div className="trip-item">
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
                {this.renderReceipt()}
              </div>
            </div>


          </div>
        </section>
      </article>
    );
  }
}

export default TripPage;
