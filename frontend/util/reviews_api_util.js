export const fetchReviews = () => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/reviews',
    })
  );
}

export const fetchReview = (id) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/reviews/${id}`
    })
  );
};

export const createReview = (review) => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/reviews',
      data: review
    })
  );
};

export const deleteReview = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/reviews${id}`
  })
);


// $.ajax({
//   method: 'POST',
//   url: '/api/reviews',
//   data: {review: { room_id: 118, rating: 4, body: "Not badd"
//  }}
// }).then((res) => console.log(res), console.errors);
//
// $.ajax({
//   method: 'GET',
//   url: '/api/reviews',
// }).then((res) => console.log(res), console.errors);
//
// $.ajax({
//   method: 'GET',
//   url: '/api/reviews/3',
// }).then((res) => console.log(res), console.errors);
