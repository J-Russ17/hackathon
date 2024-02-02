import React from 'react';

function SearchFilters({ onFilterChange }) {
  
  return (
    <div className="SearchFilters">
      <div className="SearchFilters_filters">
        
        <span className="SearchFilters_filterContainer">
          <span className="SearchFilters_text">Search </span>
          <select onChange={onFilterChange} name="Stories">
            <option value="Stories">Stories</option>
            <option value="All">All</option>
            <option value="Comments">Comments</option>
            <option value="Ask HN">Ask HN</option>
            <option value="Show HN">Show HN</option>
            <option value="Launch">Launch</option>
            <option value="Jobs">Jobs</option>
            <option value="Polls">Polls</option>
          </select>
        </span>
       
        <span className="SearchFilters_filterContainer">
          <span className="SearchFilters_text">By </span>
          <select onChange={onFilterChange} name="sort">
            <option value="Date">Date</option>
            <option value="Popularity">Popularity</option>
          </select>
        </span>
            
        <span className="SearchFilters_filterContainer">
          <span className="SearchFilters_text">for </span>
          <select onChange={onFilterChange} name="timeRange">
            <option value="Last 24h">Last 24h</option>
            <option value="All time">All time</option>
            <option value="Past Week">Past Week</option>
            <option value="Past Month">Past Month</option>
            <option value="Past Year">Past Year</option>
            <option value="Custom range">Custom range</option>
          </select>
        </span>
      </div>
      
      <div className="SearchFilters_meta">
        <p className="SearchFilters_engineProcessingTime">1,520,180 results (0.005 seconds)</p>
      </div>
    </div>
  );
}

export default SearchFilters;
