import React from 'react';

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

  handleSubmit(e) {
    e.preventDefault();
    const trip = this.state;
    // console.log(trip);
    this.props.bookTrip({trip});
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
            <input type="text" onChange={this.update('num_guests')} />
          </label>

          <br />

          <input type="submit" value="Book"/>
        </form>
        <p>You won’t be charged yet</p>
      </div>
    );
  }
}

export default BookingForm;
