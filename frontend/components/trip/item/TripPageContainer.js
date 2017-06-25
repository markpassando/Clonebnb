import { connect } from 'react-redux';
import TripPage from './TripPage';
import { fetchTrip } from '../../../actions/trip_actions';

const mapStateToProps = ({ trips }) => ({
  trip: trips.entities[trips.currentTrip],
});

const mapDispatchToProps = dispatch => ({
  fetchTrip: id => dispatch(fetchTrip(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TripPage);
