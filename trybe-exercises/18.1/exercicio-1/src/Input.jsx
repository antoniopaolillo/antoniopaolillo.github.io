import React from 'react';
import { Component } from 'react';
import listContext from './ListContext';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
    this.updateContext = this.updateContext.bind(this);
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
    this.setState({
      task: '',
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.task}
          onChange={(e) => this.changeHandler(e)}
          placeholder="adicione a tarefa"
        />
        <button onClick={this.updateContext}>adicionar</button>
      </div>
    );
  }
}

Input.contextType = listContext;
export default Input;
