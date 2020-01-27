import React from 'react';
import { Component } from 'react';
import listContext from './ListContext';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  changeHandler(event) {
    this.setState({
      task: event.target.value,
    });
  }

  updateContext() {
    const { tasks, changeTasks } = this.context;
    const newTasks = [...tasks, this.state.task];
    changeTasks(newTasks);
  }

  render() {
      console.log(this.context)
    return (
      <div>
        <input
          onChange={(e) => this.changeHandler(e)}
          placeholder="adicione a tarefa"
        />
        <button onClick={this.updateContext()}></button>
        lalala
      </div>
    );
  }
}

Input.contextType = listContext;
export default Input;
