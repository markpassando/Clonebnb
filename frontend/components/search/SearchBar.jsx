import React from 'react';
import { withRouter } from 'react-router-dom';

import { findLatLng } from '../../util/google_map_api_util';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    const input = document.getElementById('searchTextField');
    let autocomplete = new google.maps.places.Autocomplete(input);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({place: this.input.value});
    let currentInput = this.input.value;

    e.target.firstChild.value = '';

    findLatLng.bind(this)(currentInput)
      .then(res => this.props.changeFilter('place', res.results[0].geometry.location))
      .then(action => {
        let url = encodeURIComponent(currentInput);
        this.props.history.push('/s/' + encodeURIComponent(url));
      });
  }

  render() {

    return(
      <form className="search-container" ref={form => this.form = form} onSubmit={this.handleSubmit}>
        <input
          type="search"
          id="searchTextField"
          className="search-bar"
          placeholder="Search..."
          ref={input => this.input = input}
          onChange={this.update('place')}
        />
    </form>
    );
  }
}

export default withRouter(SearchBar);
