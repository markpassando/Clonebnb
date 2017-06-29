export const fetchReviews = (roomId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/reviews/`,
      data: { review: { room_id: roomId } }
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
      data: { review }
    })
  );
};

export const updateReview = (review) => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `/api/reviews/${review.id}`,
      data: { review }
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
//   method: 'PATCH',
//   url: '/api/reviews/36',
//   data: {review: { room_id: 119, rating: 4, body: "UPDATED!!!!! AGAINN"
//  }}
// }).then((res) => console.log(res), console.errors);

// $.ajax({
//   method: 'GET',
//   url: '/api/reviews',
//   data: { review: { room_id: 118 } }
// }).then((res) => console.log(res), console.errors);
//
// $.ajax({
//   method: 'GET',
//   url: '/api/reviews/3',
// }).then((res) => console.log(res), console.errors);
