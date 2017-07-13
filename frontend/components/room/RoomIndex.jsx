import React from 'react';
import RoomIndexItem from './RoomIndexItem';

class RoomIndex extends React.Component {
  componentDidMount() {
    this.props.fetchRooms();
  }

  render() {
    const { rooms } = this.props;
    const roomItems = rooms.map( room => <RoomIndexItem key={room.id} room={room} />);

    if (rooms.length === 0) {
      return <div>No Results...</div>
    } else {
      return (
        <section className="room-index">
          <ul>
            { roomItems }
          </ul>
        </section>
      );
    }
  }
}

export default RoomIndex;
