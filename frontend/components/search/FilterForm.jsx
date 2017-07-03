import React from 'react';
// https://github.com/davidchin/react-input-range
const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ minBeds, maxBeds, updateFilter }) => (
  <div>
    <span className="filter">Filter results:</span>
    <br/>
    <label>Minimum Beds</label>
    <input
      type="number"
      value={minBeds}
      onChange={handleChange('minBeds', updateFilter)}
    />
     <br/>
    <label>Maximum Beds</label>
    <input
      type="number"
      value={maxBeds}
      onChange={handleChange('maxBeds', updateFilter)}
    />
  </div>
);

export default FilterForm;
