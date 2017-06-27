import React from 'react';
import RoomDetailContainer from './detail/RoomDetailContainer';
import RoomImageContainer from './image/RoomImageContainer';
import BookingContainer from './booking/BookingContainer';
import ReviewIndexContainer from '../../review/ReviewIndexContainer';

class RoomPage extends React.Component {
  componentDidMount() {
    this.props.fetchRoom(this.props.match.params.roomId);
  }

  render() {
    const { room } = this.props;
    if (!room) return null;

    return(
      <article>
        <div>
          <RoomImageContainer room={room} />
        </div>
        <div className="container room-page">
          <div className="room-detail">
            <RoomDetailContainer room={room} />
            <ReviewIndexContainer currentRoom={room.id}/>
          </div>
          <div className="room-booking">
            <BookingContainer room={room} />
          </div>
        </div>
      </article>
    );
  }
}

export default RoomPage;
