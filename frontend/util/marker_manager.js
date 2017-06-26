export default class MarkerManager {
  constructor(map, history) {
    this.map = map;
    this.reactHistory = history;
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
    const myIcon = window.images.gmap_icon;
    const position = new google.maps.LatLng(room.lat, room.lng);
    const marker = new google.maps.Marker({
      position,
      // label: `$${room.price}`,
      title: room.title,
      label: {
        text: `$${room.price}`,
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold'
      },
      icon: {
        url: myIcon,
        labelOrigin: new google.maps.Point(29, 13.5),
      },
      map: this.map,
      roomId: room.id
    });

    const handleClick = () => {
       console.log(marker.roomId);
       this.reactHistory.push(`/rooms/${room.id}`);
    };

    google.maps.event.addListener(marker, 'click', handleClick.bind(this) );

    this.markers[marker.roomId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.roomId].setMap(null);
    delete this.markers[marker.roomId];
  }

}
