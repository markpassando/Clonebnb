import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      room_id: this.props.currentRoom,
      rating: null,
      body: null,
      hoveredStar: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.hoverStar = this.hoverStar.bind(this);
    this.unhoverStar = this.unhoverStar.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const review = this.state;
    // console.log(trip);

    this.props.createReview(review)
      .then(() => {
        this.setState({rating: '' });
        this.body.value = '';
      });
  }

  hoverStar(e) {
    this.setState({ hoveredStar: e.currentTarget.value });
  }

  unhoverStar(e) {
    this.setState({ hoveredStar: null });
  }

  render() {

    return (
      <form className="review-form" onSubmit={this.handleSubmit} onMouseLeave={this.unhoverStar}>
        <input type="radio" name="rating" value="1"
          onMouseEnter={this.hoverStar}
          onChange={this.update('rating')}
          checked={this.state.rating === "1"}
        /><i className={this.state.rating >= 1 || this.state.hoveredStar >= 1 ? "star fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>

        <input type="radio" name="rating" value="2"
          onMouseEnter={this.hoverStar}
          onChange={this.update('rating')}
          checked={this.state.rating === "2"}
        /><i className={this.state.rating >= 2 || this.state.hoveredStar >= 2 ? "star fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>

        <input type="radio" name="rating" value="3"
          onMouseEnter={this.hoverStar}
          onChange={this.update('rating')}
          checked={this.state.rating === "3"}
        /><i className={this.state.rating >= 3 || this.state.hoveredStar >= 3 ? "star fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>

        <input type="radio" name="rating" value="4"
          onMouseEnter={this.hoverStar}
          onChange={this.update('rating')}
          checked={this.state.rating === "4"}
        /><i className={this.state.rating >= 4 || this.state.hoveredStar >= 4 ? "star fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>

        <input type="radio" name="rating" value="5"
          onMouseEnter={this.hoverStar}
          onChange={this.update('rating')}
          checked={this.state.rating === "5" }
        /><i className={this.state.rating >= 5 || this.state.hoveredStar >= 5? "star fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>

        <br />

        <textarea ref={ (body) => this.body = body } name="body" onChange={this.update('body')}></textarea>

        <br />

        <input className="review-button" type="submit" value="Submit Review"/>
      </form>
    );
  }
}

export default ReviewForm;
//
//
// <input type="radio" name="rating" value="5"
//   onChange={this.update('rating')}
// /><i className={'fa' + this.state.rating >= 5 ? 'fa-star' : 'fa-star-o'} aria-hidden="true"></i>
