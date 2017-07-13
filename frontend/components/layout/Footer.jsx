import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, e.currentTarget.value)
);

const Footer = (props) => (
  <div className="footer">
    <h1>FOOTTER</h1>
  </div>
);

export default Footer;
