import React from 'react';
import { withRouter } from 'react-router-dom';
import renderError from '../../../helper/error';
import { DateRangePicker } from 'react-dates';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

      this.props.bookTrip({trip: copyState}).then(action => {
      this.props.clearTripErrors();
      this.props.history.push(`/trips/${action.trip.id}`)
      });
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
        { this.props.errors.check_in ? renderError(this.props.errors.check_in[0]) : '' }
          { this.props.errors.check_out ? renderError(this.props.errors.check_out[0]) : '' }
          <br />

          <label>Guests
            <input type="number" placeholder="Number of Guests" onChange={this.update('num_guests')} />
          </label>
          { this.props.errors.host ? renderError(this.props.errors.host[0]) : '' }
          { this.props.errors.num_guests ? renderError(this.props.errors.num_guests[0]) : '' }

          <br />

          {this.renderErrors()}

          <input className="btn pink" type="submit" value="Book"/>
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
