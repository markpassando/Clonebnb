import React from 'react';

const ReviewIndexItem = ({ review }) => {

  const renderStars = () => {
    let stars = [];
    for (var i = 0; i < review.rating; i++) {
      stars.push(<i key={i} className="fa fa-star" aria-hidden="true"></i>);
    }

    let emptyStars = stars.length;
    for (var i = emptyStars; i < 5; i++) {
      stars.push(<i key={i} className="fa fa-star-o" aria-hidden="true"></i>);
    }
    return stars;
  }

  return (
    <li>
      <img src={review.reviewer.avatar_url} />
      {review.reviewer.username}
      <p>{renderStars()}</p>
      <p>{review.body}</p>

    </li>
  );
}

export default ReviewIndexItem;
