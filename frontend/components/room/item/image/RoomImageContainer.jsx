import React from 'react';

class RoomImageContainer extends React.Component {

  render() {
    let imgStyle = {
      height: "100%",
      width: "100%",
      backgroundImage: `url(${this.props.room.main_pic_url})`
    };

    return (
      <div className="room-page-img" style={imgStyle}>
      </div>
    );
  }
}

export default RoomImageContainer;
