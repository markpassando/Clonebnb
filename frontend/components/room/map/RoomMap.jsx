import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../../util/marker_manager';

class RoomMap extends React.Component {
  componentDidMount() {
    // set the map to show SF
    // debugger
    const { lat, lng } = this.props.place;
    const mapOptions = {
      center: { lat, lng }, // this is SF
      zoom: 12
    };
    // const mapOptions = {
    //   center: { lat: 40.745267, lng: -73.993979 }, // this is SF
    //   zoom: 13
    // };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.rooms);

    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });


  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.rooms);
  }

  render() {
    return (
      <div id="map-container" className="map" ref={ map => this.mapNode = map }>
        Map
      </div>
    );
  }
}

export default withRouter(RoomMap);
