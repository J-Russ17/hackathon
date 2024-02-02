import React from 'react';

function Highlight({ text, highlight }) {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) => 
        regex.test(part) ? <span key={i} className="highlight">{part}</span> : part
      )}
    </span>
  );
}

function DisplayArticleCard({ title, url, searchTerm, points, author, created, comments, storyID }) {
  // Simplified date calculation
  const formattedDate = new Date(created);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - formattedDate);
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
  const yearsAgo = Math.floor(diffYears);

  const commentURL = `https://news.ycombinator.com/item?id=${storyID}`;
  const authorURL = `https://news.ycombinator.com/user?id=${author}`;

  return (
    <li className="articles">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Highlight text={title} highlight={searchTerm} />
      </a>
      <span className="titleURL"> (<a href={url} target="_blank" rel="noopener noreferrer">{url}</a>)</span>
      <br />
      <a href={commentURL} target="_self" className="articleInfo">{points} points | </a>
      <a href={authorURL} target="_self" className="articleInfo">{author} | </a>
      <span className="articleInfo">{yearsAgo} years ago | </span>
      <a href={commentURL} target="_self" className="articleInfo">{comments} comments</a>
    </li>
  );
}

export default DisplayArticleCard;
