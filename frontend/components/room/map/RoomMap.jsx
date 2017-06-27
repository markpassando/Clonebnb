import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty'

import MarkerManager from '../../../util/marker_manager';
import { findLatLng } from '../../../util/google_map_api_util';

class RoomMap extends React.Component {
  constructor(props) {
    super(props);

    this.map;
    this.MarkerManager;
  }

  setupMap(coords) {
    let { lat, lng } = coords;
    let mapOptions = {
      center: { lat, lng },
      zoom: 12,
      streetViewControl: false
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);

    this.MarkerManager = new MarkerManager(this.map, this.props.history);
    this.MarkerManager.updateMarkers(this.props.rooms);

    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east },
        southWest: { lat: south, lng: west } };
      this.props.updateFilter('bounds', bounds);
    });
  }
  componentDidMount() {

    //if coming from a direct url
    if (this.props.place.lat === undefined) {
      let pathname = this.props.location.pathname.slice(3);
      findLatLng(pathname)
        .then(res => this.setupMap(res.results[0].geometry.location));
    } else {
      let { lat, lng } = this.props.place;

      this.setupMap(this.props.place);
    }

  }

  componentWillUnmount() {
    google.maps.event.clearListeners(this.map, 'idle' );
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.rooms);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // debugger
      const { lat, lng } = this.props.place;
      // debugger
      this.map.setCenter(new google.maps.LatLng(lat, lng));
    }
  }

  render() {
    return (
      <div id="map-container" className="map" ref={ map => this.mapNode = map }></div>
    );
  }
}

export default withRouter(RoomMap);
