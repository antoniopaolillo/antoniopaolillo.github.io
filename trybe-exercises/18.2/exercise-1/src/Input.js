import React, {useState, useContext} from 'react';
import listContext from './ListContext';

const [task, updateTask] = useState();
const context = useContext(listContext);

const changeTasks = (event) => updateTask(event.targe.value);

function updateContext() {
  const {tasks, changeTasks} = context;
  const newTasks = [...tasks, task];
  changeTasks(newTasks);
  updateTask('');
}

function Input() {
  return (
    <div>
      <input
        value={task}
        onChange={changeTasks()}
        placeholder="adicione a tarefa"
      />
      <button onClick={updateContext}>adicionar</button>
    </div>
  );
}


export default Input;
