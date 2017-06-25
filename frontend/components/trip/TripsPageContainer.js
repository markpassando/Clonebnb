import React from 'react';
import { connect } from 'react-redux';
import { fetchTrips } from '../../actions/trip_actions';
import TripPage from './TripPage';
import { selectAllTrips } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    trips: selectAllTrips(state),
    // currentbench: selectSingleBench(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTrips: () => dispatch(fetchTrips())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TripPage);
