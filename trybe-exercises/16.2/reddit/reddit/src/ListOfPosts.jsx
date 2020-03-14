import React from 'react';
import Post from './Post';

function ListOfPosts({ data }) {
  return (
    <ul data-testid="ul-container">
      {data.map((post) => (
        <Post data={post.data} key={post.data.title} />
      ))}
    </ul>
  );
}

export default ListOfPosts;
