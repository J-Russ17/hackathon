import React from 'react'


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

function DisplayArticleCard({ title, url, ...props }) {

  const removez = props.created.replace("A", "");
  const removetime = removez.substr(0, 10);
  const formattedDate = new Date(removetime.replace("T", " "));
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - formattedDate);
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365);
  const yearsAgo = Math.floor(diffYears);

  const commentURL = 'https://news.ycombinator.com/item?id=' + props.storyID;
  const authorURL = 'https://news.ycombinator.com/user?id=' + props.author;

  return (
    <li className="articles"> 
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Highlight text={title} highlight={props.searchTerm} />
      </a>
      <a href={props.url} target="_blank" className="titleURL"> ({props.url})</a>
      <br />
      <a href={commentURL} target="_self" className="info">{props.points} points | </a>
      <a href={authorURL} target="_self" className="info"> {props.author} | </a>
      <span className="info"> {yearsAgo} years ago | </span>
      <a href={commentURL} target="_self" className="info"> {props.comments} comments</a>
    </li>
  );
}

export default DisplayArticleCard;