import React from "react";
import PropTypes from "prop-types";

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      name: this.props.array[0].item
    };
    this.openAndCloseDiv = this.openAndCloseDiv.bind(this);
  }

  openAndCloseDiv() {
    this.state.display === "none"
      ? this.setState({ display: "block" })
      : this.setState({ display: "none" });
  }

  onClick(newName) {
      this.setState({name: newName})
  }

  render() {
    return (
      <div>
        <span onClick={this.openAndCloseDiv}>{this.state.name}</span>
        <ul style={{ display: this.state.display }}>
          {this.props.array.map(word => (
            <li onClick={() => this.onClick(word.item)}>{word.item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Top.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      item: PropTypes.string
    })
  )
};

export default Top;
