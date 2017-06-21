import React from 'react';
import RoomIndexItem from './RoomIndexItem';

class RoomIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    const { rooms } = this.props;
    const roomItems = rooms.map( room => <RoomIndexItem key={room.id} room={room} />);

    return (
      <section className="room-index container">
        <div className="header-greeting">
          <h1><strong>Clonebnb</strong> Book unique homes and experience a city like a local.</h1>
        </div>

        <ul>
          { roomItems }
        </ul>
      </section>
    );
  }
}

export default RoomIndex;
