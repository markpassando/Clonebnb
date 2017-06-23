export const fetchTrips = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/trips',
    })
  );
}

export const fetchTrip = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/trips/${id}`
    })
  );
};

export const createTrip = (trip) => {
  debugger
  return (
    $.ajax({
      method: 'POST',
      url: '/api/trips',
      data: trip
    })
  );
};

export const deleteTrip = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/trips${id}`
  })
);


// $.ajax({
//   method: 'POST',
//   url: '/api/trips',
//   data: {trip: { room_id: 46, status: "Pending", check_in: Date.now(), check_out: Date.now(), num_guests: 5
//  }}
// }).then((res) => console.log(res), console.errors);
//
// $.ajax({
//   method: 'GET',
//   url: '/api/trips',
// }).then((res) => console.log(res), console.errors);
//
// $.ajax({
//   method: 'GET',
//   url: '/api/trips/3',
// }).then((res) => console.log(res), console.errors);
