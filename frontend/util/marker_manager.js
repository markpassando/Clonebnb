export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(rooms) {
    console.log('time to update');
    rooms.forEach((room) => {
      if (!this.markers.hasOwnProperty(room.id)) {
        this.markers[room.id] = room;
        // this.createMarkerFromRoom(room);
      }
    });
  }

  createMarkerFromBench(room) {
    new google.maps.Marker({
      position: { lat: room.lat, lng: room.lng },
      map: this.map,
      title: room.description
    });
  }


}
