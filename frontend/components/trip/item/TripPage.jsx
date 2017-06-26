import React from 'react';
import { Link } from 'react-router-dom';
import RoomImageContainer from '../../room/item/image/RoomImageContainer';

class TripPage extends React.Component {
  componentDidMount() {
    this.props.fetchTrip(this.props.match.params.tripId);
  }

  renderReceipt(){
    const { trip } = this.props;
    let checkIn = new Date(trip.check_in);
    let checkOut = new Date(trip.check_out);

    let timeDiff = Math.abs(checkOut.getTime() - checkIn.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return (<p>{diffDays} days</p>);
  }

  render() {
    const { trip } = this.props;
    if (!trip) return null;

    return(
      <article>
        <RoomImageContainer room={trip.room} />
        <section className="container">
          <div className="room-page room-detail">
            <div className="rm-detail-title rm-detail-bottom">
              <div>
                <h2>{trip.room.title}</h2>
                <p>{trip.room.address}</p>
              </div>
              <div className="host-container">
                <div>
                  <img src={trip.room.avatar_url} />
                </div>
                <div>
                  <p>{trip.room.username}</p>
                </div>
              </div>
            </div>
          </div>

          <Link to={`/rooms/${trip.room.id}`}><img src={trip.room.room_pic_url} /></Link>
          <img src={trip.room.host_pic_url} />
          <Link to={`/rooms/${trip.room.id}`}>{trip.room.title}</Link>
          <p>Status: {trip.status}</p>
          <p>{trip.num_guests} Guests</p>
          <p>{trip.check_in} - {trip.check_out}</p>
          {this.renderReceipt()}
        </section>
      </article>
    );
  }
}

export default TripPage;
