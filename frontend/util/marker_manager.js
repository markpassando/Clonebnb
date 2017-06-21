export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(rooms) {
    console.log('time to update');
    // rooms.forEach((room) => {
    //   if (!this.markers.hasOwnProperty(room.id)) {
    //     this.markers[room.id] = room;
    //     this.createMarkerFromRoom(room);
    //   }
    // });
    const roomsObj = {};
    rooms.forEach(room => roomsObj[room.id] = room);

    rooms
      .filter(room => !this.markers[room.id])
      .forEach(newRoom => this.createMarkerFromRoom(newRoom));

    Object.keys(this.markers)
      .filter(roomId => !roomsObj[roomId])
      .forEach((roomId) => this.removeMarker(this.markers[roomId]));
  }

  createMarkerFromRoom(room) {
    // new google.maps.Marker({
    //   position: { lat: room.lat, lng: room.lng },
    //   map: this.map,
    //   title: room.description
    // });
    const position = new google.maps.LatLng(room.lat, room.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      roomId: room.id
    });

    this.markers[marker.roomId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.roomId].setMap(null);
    delete this.markers[marker.roomId];
  }

}
