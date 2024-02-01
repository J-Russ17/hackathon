import React from "react";
import ArticleCard from "./ArticleCard";

function ListArticles(props) {
  const { articles } = props;
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.story_id} article={article} />
      ))}
    </div>
  );
}

export default ListArticles;
