import React from 'react';
import { createTrip, clearTripErrors } from '../../../../actions/trip_actions';
import { showModal } from '../../../../actions/modal_actions';
import { connect } from 'react-redux';
import BookingForm from './BookingForm';
import LogInFormContainer from '../../../session_form/LogInFormContainer';

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
  errors: state.trips.errors,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  bookTrip: trip => dispatch(createTrip(trip)),
  clearTripErrors: () => dispatch(clearTripErrors()),
  showLogIn: () => dispatch(showModal(<LogInFormContainer formType={'login'}/>))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingFormContainer);
