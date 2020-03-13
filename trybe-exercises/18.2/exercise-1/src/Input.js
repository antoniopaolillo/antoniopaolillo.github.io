import React, { useState, useContext } from 'react';
import listContext from './ListContext';

function Input() {
  const [task, updateTask] = useState();
  const {tasks, changeTasks} = useContext(listContext);

  const changeTask = (event) => updateTask(event.target.value);

  function updateContext() {
    const newTasks = [...tasks, task];
    changeTasks(newTasks);
    updateTask('');
  }

  return (
    <div>
      <input
        value={task}
        onChange={(e) => changeTask(e)}
        placeholder="adicione a tarefa"
      />
      <button onClick={updateContext}>adicionar</button>
    </div>
  );
}

export default Input;
