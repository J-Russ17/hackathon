import React, { useState } from "react";

function FilterSearch(props) {
  const { searchTerm, setSearchTerm } = props;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleChange}></input>
    </>
  );
}

export default FilterSearch;
