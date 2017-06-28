import React from 'react';

const renderStars = (rating) => {
  let stars = [];
  for (var i = 0; i < rating; i++) {
    stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
  }

  let emptyStars = stars.length;
  for (var i = emptyStars; i < 5; i++) {
    stars.push(<i key={i} className="fa fa-star-o" aria-hidden="true"></i>);
  }
  return stars;
}

export default renderStars;
