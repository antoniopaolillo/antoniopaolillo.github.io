import React from 'react';
import listContext from './ListContext';

class List extends React.Component {
//   generateTasks() {
//     const { tasks } = this.context;
//     return tasks.map((task) => <li>{task}</li>);
//   }

  render() {
      console.log(this.context);
    // return <ul>{this.generateTasks()}</ul>;
    return <div>nadanao</div>
  }
}

List.contextType = listContext;
export default List;
