import React from 'react';
import TripIndex from './TripIndex';

class TripPage extends React.Component {

  render() {

    return(
      <article className="container">
        <h2>My Trips</h2>
        <TripIndex {...this.props}/>
      </article>
    );
  }
}

export default TripPage;
