
import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <div>
      <label htmlFor="filter">Filter items: </label>
      <select id="filter" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all">All</option>
        <option value="fruit">Fruits</option>
        <option value="vegetable">Vegetables</option>
      </select>
    </div>
  );
}

export default Filter;
