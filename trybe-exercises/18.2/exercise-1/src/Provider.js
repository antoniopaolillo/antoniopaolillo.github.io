import React from 'react';
import ListContext from './ListContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
    this.changeTasks = this.changeTasks.bind(this);
  }
  changeTasks(newTasks) {
    this.setState({
      tasks: newTasks,
    });
  }
  render() {
    const contextValue = {
      ...this.state,
      changeTasks: this.changeTasks,
    };
    const { children } = this.props;
    return (
      <ListContext.Provider value={contextValue}>
        {children}
      </ListContext.Provider>
    );
  }
}

export default Provider;
