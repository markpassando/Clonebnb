import React from 'react';
import RoomDetailContainer from './detail/RoomDetailContainer';

class RoomPage extends React.Component {
  componentDidMount() {
    this.props.fetchRoom(this.props.match.params.roomId);
  }

  render() {
    const { room } = this.props;
    if (!room) return null;

    return(
      <article>
        <div>Big ass picture goes here</div>
        <RoomDetailContainer room={room}/>
        <div>Reviews go here</div>
      </article>
    );
  }
}

export default RoomPage;
