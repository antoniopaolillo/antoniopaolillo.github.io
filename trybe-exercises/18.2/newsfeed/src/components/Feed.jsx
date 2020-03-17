import React, { useContext } from 'react';
import context from '../context/context';
import Notice from './Notice';
import './Notice.css';

function Feed() {
  const { data } = useContext(context);
  if (!data) return <div data-testid="loading">LOADING...</div>;
  return (
    <div data-testid="feed-container" className="feed-container">
      {data.articles.map((article, index) => (
        <Notice key={`${article.title}-${index}`} data={article} />
      ))}
    </div>
  );
}

export default Feed;
