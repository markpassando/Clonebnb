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
      <div>
        <ul>
          { roomItems }
        </ul>
      </div>
    );
  }
}

export default RoomIndex;
