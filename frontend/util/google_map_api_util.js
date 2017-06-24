export const findLatLng = (place) => (
  $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${place}`,
  })
)
