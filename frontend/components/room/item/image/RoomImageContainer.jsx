import React from 'react';

class RoomImageContainer extends React.Component {

  render() {
    return (
      <div>
        <img src={this.props.room.main_pic_url} />
      </div>
    );
  }
}

export default RoomImageContainer;
