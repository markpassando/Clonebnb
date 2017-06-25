import React from 'react';
import TripIndexItem from './TripIndexItem';

class TripIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    const { trips } = this.props;
    const tripItems = trips.map( trip => <TripIndexItem key={trip.id} trip={trip} />);

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
