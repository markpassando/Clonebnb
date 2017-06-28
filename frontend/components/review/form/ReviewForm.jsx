import React from 'react';
import renderError from '../../helper/error';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      room_id: this.props.currentRoom,
      rating: null,
      body: null,
      hoveredStar: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.hoverStar = this.hoverStar.bind(this);
    this.unhoverStar = this.unhoverStar.bind(this);
  }

  // componentDidMount() {
  //   debugger
  // }

  componentWillReceiveProps(newProps) {
    const { editedForm } = newProps;
    if (editedForm) {

      // window.scrollTo(0,0);
      this.body.value = editedForm.body;
      this.setState( { id: editedForm.id, body: editedForm.body, rating: editedForm.rating });
    }
  }

  // componentDidUpdate() {
  //   const { editedForm } = this.props
  //   if (editedForm) {
  //     this.setState({ body: editedForm.body });
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const review = this.state;
    this.props.processForm(review)
      .then(() => {
        this.setState({rating: '' });
        this.body.value = '';
        this.props.clearReviewErrors();
      });
  }

  hoverStar(e) {
    this.setState({ hoveredStar: e.currentTarget.value });
  }

  unhoverStar(e) {
    this.setState({ hoveredStar: null });
  }

  render() {

    const { editedForm } = this.props;

    return (
      <form className="review-form" onSubmit={this.handleSubmit}>
        <div className="star xlg lg-marg" onMouseLeave={this.unhoverStar}>
          <input type="radio" name="rating" value="1"
            onMouseEnter={this.hoverStar}
            onChange={this.update('rating')}
            checked={this.state.rating === "1"}
            /><i className={this.state.rating >= 1 || this.state.hoveredStar >= 1 ? "fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>

          <input type="radio" name="rating" value="2"
            onMouseEnter={this.hoverStar}
            onChange={this.update('rating')}
            checked={this.state.rating === "2"}
            /><i className={this.state.rating >= 2 || this.state.hoveredStar >= 2 ? "fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>

          <input type="radio" name="rating" value="3"
            onMouseEnter={this.hoverStar}
            onChange={this.update('rating')}
            checked={this.state.rating === "3"}
            /><i className={this.state.rating >= 3 || this.state.hoveredStar >= 3 ? "fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>

          <input type="radio" name="rating" value="4"
            onMouseEnter={this.hoverStar}
            onChange={this.update('rating')}
            checked={this.state.rating === "4"}
            /><i className={this.state.rating >= 4 || this.state.hoveredStar >= 4 ? "fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>

          <input type="radio" name="rating" value="5"
            onMouseEnter={this.hoverStar}
            onChange={this.update('rating')}
            checked={this.state.rating === "5" }
            /><i className={this.state.rating >= 5 || this.state.hoveredStar >= 5? "fa fa-star" : "star fa fa-star-o"} aria-hidden="true"></i>
        </div>

        <br />

        <textarea ref={ (body) => this.body = body } name="body" onChange={this.update('body')}>{this.state.body}</textarea>
        <br />

        { this.props.errors.samePerson ? renderError(this.props.errors.samePerson[0]) : '' }
        { this.props.errors.emptyForm ? renderError(this.props.errors.emptyForm[0]) : '' }
        { this.props.errors.user_id ? renderError(this.props.errors.user_id[0]) : '' }

        <input className="review-button" type="submit" value={ editedForm ?  'Edit Review' : 'Submit Review' } />
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
