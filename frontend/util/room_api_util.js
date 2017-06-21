export const fetchRooms = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/rooms'
    })
  );
};

export const fetchRoom = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/rooms/${id}`
    })
  );
};

export const createRoom = (room) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/rooms',
      data: room
    })
  );
};

// $.ajax({
//   method: 'POST',
//   url: '/api/rooms',
//   data: {
//     room: {
      // host_id: 3,
      // title: "App Academy NYC",
      // address: "159 W 25th St, New York, NY 10001",
      // price: 1000,
      // num_guests: 100,
      // bedrooms: 3,
      // beds: 5,
      // description: "The new space features hardwood floors and brick walls for a modern technology space with an aura for learning.",
      // rules: "No pets",
      // prop_type: "Apartment",
      // room_type: "Entire Home",
      // wifi: true,
      // kitchen: true,
      // ac: true,
      // tv: true
//     }
//   }
// }).then((res) => console.log(res), () => console.log("nahhh"));
//
// {
//   room: {
//     host_id: 3,
//     title: "App Academy NYC",
//     address: "159 W 25th St, New York, NY 10001",
//     price: 1000,
//     num_guests: 100,
//     bedrooms: 3,
//     beds: 5,
//     description: "The new space features hardwood floors and brick walls for a modern technology space with an aura for learning.",
//     rules: "No pets",
//     prop_type: "Apartment",
//     room_type: "Entire Home",
//     wifi: true,
//     kitchen: true,
//     ac: true,
//     tv: true
//   }
// }
//
