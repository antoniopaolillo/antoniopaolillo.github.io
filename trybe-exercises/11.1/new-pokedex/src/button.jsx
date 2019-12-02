import React from "react";
import './App.css'

class Button extends React.Component {
  render() {
    const { onClick, value } = this.props;
  return <button className="btn" onClick={onClick}>{value}</button>;
  }
}

export default Button;
