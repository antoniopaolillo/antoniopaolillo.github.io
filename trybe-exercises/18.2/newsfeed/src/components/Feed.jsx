import React, { useContext } from 'react';
import context from '../context/context';
import Notice from './Notice';
import './Notice.css';
import { useEffect } from 'react';

function Feed() {
  const { data, startInterval } = useContext(context);
  useEffect(() => {
    startInterval();
  }, []);
  console.log(data);
  if (!data) return <div>LOADING...</div>;
  return (
    <div className="feed-container">
      {data.articles.map((article) => (
        <Notice key={article.title} data={article} />
      ))}
    </div>
  );
}

export default Feed;
