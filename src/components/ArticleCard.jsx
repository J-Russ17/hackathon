import React from "react";

function ArticleCard(props) {
  const { article } = props;
  return (
    <div className="articleCards">
      <a href={article.url}>
        <h3> {article.title}</h3>
      </a>
      <p>{article.author}</p>
    </div>
  );
}

export default ArticleCard;
