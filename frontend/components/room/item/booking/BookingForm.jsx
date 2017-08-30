import React from 'react';
import { withRouter } from 'react-router-dom';
import renderError from '../../../helper/error';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      room_id: this.props.room.id,
      num_guests: null,
      startDate: null,
      endDate: null,
      focusedInput: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearTripErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    if (this.props.errors.length > 0) {

      return(
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.clearTripErrors();

    if (this.props.currentUser === null) {
      this.props.showLogIn();
    } else {
      this.setState({loading: true});
      const trip = this.state;
      const copyState = Object.assign({}, this.state);

      if (copyState.startDate)
        copyState.check_in = copyState.startDate.format();
      if (copyState.endDate)
        copyState.check_out = copyState.endDate.format();
      copyState.startDate = null;
      copyState.endDate = null;
      // May need to come back to this when you do Date validations. Refer to this link when you do that
      //https://stackoverflow.com/questions/39972663/format-momentjs-to-rails-datetime

      this.props.bookTrip({trip: copyState})
        .then(action => {this.props.history.push(`/trips/${action.trip.id}`)})
        .then(this.setState({loading: false}));
    }
  }

  renderGuestList() {
    const num_guests = this.props.room.num_guests;
    let options = [];

    for (var i = 1; i <= num_guests; i++) {
      options.push(<option value={i}>{`${i} guests`}</option>);
    }
    return options;
  }

  render() {

    const { errors } = this.props;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>

          <div className="date-labels">
            <label>Check In</label>
            <label>Check Out</label>
          </div>
          <DateRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
          { errors.check_in && renderError(errors.check_in[0]) }
          { errors.check_out && renderError(errors.check_out[0]) }

          <label>Guests
            <input type="number" placeholder="Number of Guests" onChange={this.update('num_guests')} />
          </label>
          { errors.host && renderError(errors.host[0]) }
          { errors.num_guests && renderError(errors.num_guests[0]) }

          <button className="btn pink" type="submit" disabled={ this.state.loading && "disabled" }>
            { this.state.loading
              ? <span><i className="fa fa-spinner fa-pulse fa-fw loading"></i> Booking</span>
              : <span>Book</span>
            }
          </button>

          <small>You won’t be charged yet</small>
        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);



// <label>Check In
//   <input type="date" onChange={this.update('check_in')} />
// </label>
//
// <br />
//
// <label>Check Out
//   <input type="date" onChange={this.update('check_out')} />
// </label>
