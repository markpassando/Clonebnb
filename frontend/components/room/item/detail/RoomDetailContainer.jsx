import React from 'react';
import RoomDetail from './RoomDetail';

class RoomDetailContainer extends React.Component {

  render() {
    return (
      <div>
        <RoomDetail room={this.props.room} />
      </div>
    );
  }
}

export default RoomDetailContainer;
