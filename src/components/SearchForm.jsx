import React, { useState } from "react";

function FilterSearch(props) {
  const { searchTerm, setSearchTerm, categories, setCategories } = props;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategories = (e) => {
    setCategories(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search by title or author"
      ></input>
      <select onChange={handleCategories}>
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
    </>
  );
}

export default FilterSearch;
