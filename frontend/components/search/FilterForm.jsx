import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const FilterForm = ({ minGuests, minPrice, maxPrice, updateFilter }) => (
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

export default FilterForm;
