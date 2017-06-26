import React from 'react';
import BookingForm from './BookingForm';
import { createTrip } from '../../../../actions/trip_actions';
import { connect } from 'react-redux';

class BookingFormContainer extends React.Component {

  render() {
    return(
      <div>
        <div className="bk-price">
          <p><i className="fa fa-bolt" aria-hidden="true"></i><span> ${this.props.room.price}</span> per night</p>
        </div>
        <BookingForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.trips.errors
});

const mapDispatchToProps = (dispatch) => ({
  bookTrip: trip => dispatch(createTrip(trip))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingFormContainer);
