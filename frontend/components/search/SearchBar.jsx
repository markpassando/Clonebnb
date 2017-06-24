import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      place: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const input = document.getElementById('searchTextField');
    let autocomplete = new google.maps.places.Autocomplete(input);
    console.log(autocomplete);
  }

  render() {

    return(
      <form className="search-container" onSubmit={this.handleSubmit}>
        <input
          id="searchTextField"
          className="search-bar"
          placeholder="Search..."
          onChange={this.update('place')}
        />
    </form>
    );
  }
}

export default SearchBar;
