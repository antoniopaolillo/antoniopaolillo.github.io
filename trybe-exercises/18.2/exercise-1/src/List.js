import React, { useContext } from 'react';
import listContext from './ListContext';

function List() {
  const { tasks } = useContext(listContext);
  return (
    <ul>
      {tasks.map((task) => (
        <li>{task}</li>
      ))}
    </ul>
  );
}

export default List;
