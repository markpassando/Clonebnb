import React from 'react';
import TripIndex from './TripIndex';

class TripIndexPage extends React.Component {

  render() {

    return(
      <article className="container">
        <h2>My Trips</h2>
        <TripIndex {...this.props}/>
      </article>
    );
  }
}

export default TripIndexPage;
