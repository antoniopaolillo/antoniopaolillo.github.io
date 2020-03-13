import React from "react";
import { incremento2, decremento2 } from "./Actions";
import { connect } from "react-redux";
class Counter2 extends React.Component {
validateValue() {
    if(this.props.value < 6) {
        return alert('valor nao pode ser negativo');
    }
    return this.props.removeValue()
}
  render() {
    return (
      <div>
        <h2>contador 2</h2>
        <button onClick={() => this.props.addValue()}>+</button>
        <p>{this.props.value}</p>
        <button onClick={() => this.validateValue()}>-</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addValue: () => dispatch(incremento2()),
    removeValue: () => dispatch(decremento2())
  };
};

const mapStateToProps = ({reducer2: {value}}) => ({ value });

export default connect(mapStateToProps, mapDispatchToProps)(Counter2);
