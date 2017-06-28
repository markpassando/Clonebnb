import React from 'react';
import renderStars from '../helper/star';

const ReviewIndexItem = ({ review }) => {

  return (
    <li>
      <div className="rating-reviewer">
        <div>
          <img src={review.reviewer.avatar_url} />
        </div>
        <p>{review.reviewer.username}</p>
      </div>
      <div>
        <p className="star lg sm-marg">{ review.rating ? renderStars(review.rating) : '' }</p>
        <p>{review.body}</p>
      </div>

    </li>
  );
}

export default ReviewIndexItem;
