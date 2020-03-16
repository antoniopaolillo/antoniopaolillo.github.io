import React, { useContext } from 'react';
import context from '../context/context';
import Notice from './Notice';
import './Notice.css';

function Feed() {
  const { data } = useContext(context);
  console.log(data);
  if (!data) return <div data-testid="loading">LOADING...</div>;
  return (
    <div data-testid="feed-container" className="feed-container">
      {data.articles.map((article) => (
        <Notice key={article.title} data={article} />
      ))}
    </div>
  );
}

export default Feed;
