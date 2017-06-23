import React from 'react';
import BookingForm from './BookingForm';
import { createTrip } from '../../../../actions/trip_actions';
import { connect } from 'react-redux';

class BookingFormContainer extends React.Component {

  render() {
    return(
      <div>
        <div>
          <p>${this.props.room.price} per night</p>
        </div>
        <BookingForm {...this.props} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  bookTrip: trip => dispatch(createTrip(trip))
});

export default connect(
  null,
  mapDispatchToProps
)(BookingFormContainer);
