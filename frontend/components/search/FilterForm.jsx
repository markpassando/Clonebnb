import React from 'react';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.updateFilter('minGuests', "");
    this.props.updateFilter('minPrice', "");
    this.props.updateFilter('maxPrice', "");
  }


  render() {
    const { minGuests, minPrice, maxPrice, updateFilter } = this.props;

    const handleChange = (filter, updateFilter) => e => (
      updateFilter(filter, e.currentTarget.value)
    );

    return (
      <div className="filter-form">
        <div>
          <label>Min Guests:</label>
          <input
            type="number"
            value={minGuests}
            placeholder="Number"
            onChange={handleChange('minGuests', updateFilter)}
            />
        </div>

      <div>
          <label>Price Range:</label>
          <input
            type="number"
            value={minPrice}
            placeholder="$ Min"
            onChange={handleChange('minPrice', updateFilter)}
            />

          <input
            type="number"
            value={maxPrice}
            placeholder="$$ Max"
            onChange={handleChange('maxPrice', updateFilter)}
            />
        </div>
      </div>
    );
  }
}






export default FilterForm;
