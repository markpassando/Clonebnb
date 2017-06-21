import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

// import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13
};

class RoomMap extends React.Component {


  render() {
    return (
      <div id="map-container" className="map" ref="map">
        Map
      </div>
    );
  }
}

export default withRouter(RoomMap);
