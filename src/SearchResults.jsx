import React from 'react';
import DisplayArticleCard from './DisplayArticles.jsx';

function SearchResults({ articles, searchTerm }) {
  return (
    <ul className="SearchResults">
      {articles.map((article, index) => (
        <DisplayArticleCard
          key={index}
          title={article.title}
          searchTerm={searchTerm}
          url={article.url}
          points={article.points}
          author={article.author} 
          created={article.created_at}
          comments={article.num_comments}
          storyID={article.story_id} 
        />
      ))}
    </ul>
  );
}

export default SearchResults;
