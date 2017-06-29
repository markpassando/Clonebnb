import React from 'react';
import renderStars from '../helper/star';

const ReviewIndexItem = ({ review, currentUser, userReviewed }) => {
  const myReview = currentUser.username === review.reviewer.username;

  return (
    <li className={ myReview ? 'my-review' : '' }>
      <i className="small-title">{ myReview ? 'Your Review' : '' }</i>
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
