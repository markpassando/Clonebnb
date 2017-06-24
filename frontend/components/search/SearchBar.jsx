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
    // console.log("OnChange event");
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({place: this.input.value});
    // debugger
    // console.log(this.input.value);
    // debugger
    // console.log(this.state.place);
    // console.log(autocomplete);
    // let result = findLatLng(this.state.place).then((res) => console.log(res) );
    // let result = findLatLng(this.state.place).then((res) => { res.results[0].geometry.location });
 var that = this.props;

    findLatLng.bind(this)(this.input.value)
      .then(res => this.props.changeFilter('place', res.results[0].geometry.location))
      .then(action => {
        let url = encodeURIComponent(this.input.value);
        // debugger
        // return this.props.history.push(`s/${url}`)
        return this.props.history.push('/s/' + encodeURIComponent(url));
      });
  }

  render() {

    return(
      <form className="search-container" onSubmit={this.handleSubmit}>
        <input
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
