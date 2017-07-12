import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ minBeds, maxBeds, minPrice, maxPrice, updateFilter }) => (
  <div>
    <span className="filter">Filter:</span>
    
    <br/>
    <label>Minimum Beds</label>
    <input
      type="number"
      value={minBeds}
      onChange={handleChange('minBeds', updateFilter)}
    />
     <br/>

  <label>Minimum Price</label>
    <input
      type="number"
      value={minPrice}
      onChange={handleChange('minPrice', updateFilter)}
    />
     <br/>
    <label>Maximum Price</label>
    <input
      type="number"
      value={maxPrice}
      onChange={handleChange('maxPrice', updateFilter)}
    />
  </div>
);

export default FilterForm;
