import React from 'react';
import TripIndexItem from './TripIndexItem';
import Footer from '../layout/Footer';

class TripIndex extends React.Component {
  componentDidMount() {
    this.props.fetchTrips();
  }

  render() {
    const { trips } = this.props;
    const tripItems = trips.map( trip => <TripIndexItem key={trip.id} trip={trip} />);

    return(
      <article>
        <ul className="trip-index">
          { tripItems }
        </ul>
        <Footer />
      </article>
    );
  }
}

export default TripIndex;
