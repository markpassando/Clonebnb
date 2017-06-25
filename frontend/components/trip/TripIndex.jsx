import React from 'react';
import TripItem from './TripItem';

class TripIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    const { trips } = this.props;
    const tripItems = trips.map( trip => <TripItem key={trip.id} trip={trip} />);

    return(
      <article>
        <ul>
          { tripItems }
        </ul>
      </article>
    );
  }
}

export default TripIndex;
