import * as APIUtil from '../util/trip_api_util';

export const RECEIVE_TRIPS = 'RECEIVE_TRIPS';
export const RECEIVE_TRIP = 'RECEIVE_TRIP';
export const RECEIVE_TRIP_ERRORS = 'RECEIVE_TRIP_ERRORS';
export const CLEAR_TRIP_ERRORS = 'CLEAR_TRIP_ERRORS';

export const receiveTrips = trips => {
  return ({
    type: RECEIVE_TRIPS,
    trips
  });
};

export const receiveTrip = trip => ({
  type: RECEIVE_TRIP,
  trip
});

export const receiveTripErrors = errors => ({
  type: RECEIVE_TRIP_ERRORS,
  errors
});

export const clearTripErrors = errors => ({
  type: CLEAR_TRIP_ERRORS,
  errors
});

export const fetchTrips = () => dispatch => (
  APIUtil.fetchTrips().then(trips => (
    dispatch(receiveTrips(trips)),
    console.error
  ))
);

export const fetchTrip = id => dispatch => (
  APIUtil.fetchTrip(id).then(trip => (
    dispatch(receiveTrip(trip)),
    console.error
  ))
);

export const createTrip = trip => dispatch => (
  APIUtil.createTrip(trip).then(
    trip => dispatch(receiveTrip(trip)),
    err => dispatch(receiveTripErrors(err.responseJSON))
  )
);
