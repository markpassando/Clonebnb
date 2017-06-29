import React from 'react';
import moment from 'moment';
import renderStars from '../helper/star';

const ReviewIndexItem = ({ review, currentUser, userReviewed, showEditReview, deleteReview }) => {
  const myReview = currentUser !== null && currentUser.username === review.reviewer.username;

  const dateFormated = moment(review.created_at).format("MMMM YYYY");

  return (
    <li className={ myReview ? 'my-review' : '' }>
      <i className="small-title">{ myReview ? 'Your Review' : '' }</i>
      <div className="rating-reviewer">
        <div>
          <img src={review.reviewer.avatar_url} />
        </div>
        <div className="reviwer-info">
          <p>{review.reviewer.username}</p>
          <time dateTime={moment(review.created_at).format()}>{dateFormated}</time>
        </div>
      </div>
      <div>
        <p className="star lg sm-marg">{ review.rating ? renderStars(review.rating) : '' }</p>
        <p>{review.body}</p>
      </div>

      <div className="space-between">
        { myReview ? <button className="hallow-button teal" onClick={() => showEditReview(userReviewed)}><i className="fa fa-pencil" aria-hidden="true"></i> Edit</button> : '' }
        { myReview ? <button className="hallow-button pink" onClick={() => deleteReview(userReviewed)}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</button> : '' }
      </div>
    </li>
  );
}

export default ReviewIndexItem;
