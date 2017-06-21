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
//       host_id: 4,
//       title: "App Academy NYC",
//       address: "159 W 25th St, New York, NY 10001",
//       price: 1000,
//       num_guests: 100,
//       bedrooms: 3,
//       beds: 5,
//       description: "The new space features hardwood floors and brick walls for a modern technology space with an aura for learning.",
//       rules: "No pets",
//       prop_type: "Apartment",
//       room_type: "Entire Home",
//       wifi: true,
//       kitchen: true,
//       ac: true,
//       tv: true
//     }
//   }
// }).then((res) => console.log(res), () => console.log("nahhh"));
//
// $.ajax({
//   method: 'POST',
//   url: '/api/rooms',
//   data: {
//     room: {
//       host_id: 4,
//       title: "Hell's Kitchen Loft with Room Access",
//       address: "480 W 42nd St, New York, NY 10036",
//       price: 150,
//       num_guests: 3,
//       bedrooms: 1,
//       beds: 1,
//       description: "Very spacious loft located in Hell's Kitchen. Large windows allow for great sunlight. There is access to the roof.",
//       rules: "Noise must be kept to a minimum",
//       prop_type: "Apartment",
//       room_type: "Entire Home",
//       wifi: true,
//       kitchen: true,
//       ac: true,
//       tv: false
//     }
//   }
// }).then((res) => console.log(res), console.errors);
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
