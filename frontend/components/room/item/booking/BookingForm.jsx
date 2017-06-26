import React from 'react';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      room_id: this.props.room.id,
      check_in: null,
      check_out: null,
      num_guests: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    if (this.props.errors) {
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

    const trip = this.state;
    // console.log(trip);
    this.props.bookTrip({trip}).then(action => this.props.history.push(`/trips/${trip.id}`));
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
          <label>Check In
            <input type="date" onChange={this.update('check_in')} />
          </label>

          <br />

          <label>Check Out
            <input type="date" onChange={this.update('check_out')} />
          </label>

          <br />



          <label>Guests
            <input type="text" placeholder="1" onChange={this.update('num_guests')} />
          </label>

          <br />

          <input className="btn pink" type="submit" value="Book"/>
          <small>You won’t be charged yet</small>
        </form>
      </div>
    );
  }
}

export default withRouter(BookingForm);
