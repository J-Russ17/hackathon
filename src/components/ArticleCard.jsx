import React from "react";

function ArticleCard(props) {
  const { article } = props;
  return (
    <div>
      <p> {article.title}</p>
      <p>{article.author}</p>
    </div>
  );
}

export default ArticleCard;
