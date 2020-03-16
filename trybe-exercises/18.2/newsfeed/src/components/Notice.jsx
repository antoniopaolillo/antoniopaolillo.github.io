import React from 'react';
import './Notice.css';

function Notice({ data }) {
  return (
    <div className="notice-container" data-testid={data.title}>
      <h2>{data.title}</h2>
      <h3>{data.author}</h3>
      <h4>{data.description}</h4>
      <p>{data.publishedAt}</p>
      <a href={data.url}>ORIGINAL LINK</a>
      <img style={{ width: '300px' }} src={data.urlToImage} />
    </div>
  );
}

export default Notice;
