import React from "react";
import { incremento1, decremento1 } from "./Actions";
import { connect } from "react-redux";
class Counter1 extends React.Component {
  render() {
    return (
      <div>
        <h2>contador 1</h2>
        <button onClick={() => this.props.addValue()}>+</button>
        <p>{this.props.value}</p>
        <button onClick={() => this.props.removeValue()}>-</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addValue: () => dispatch(incremento1()),
    removeValue: () => dispatch(decremento1())
  };
};

const mapStateToProps = ({reducer1: {value}}) => ({ value });

export default connect(mapStateToProps, mapDispatchToProps)(Counter1);
