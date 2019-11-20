import React from "react";

class Inputs extends React.Component {
  render() {
    const { id, name, maxLength, type } = this.props;

    return (
      <div>
        <input
          type={type}
          placeholder={id}
          required="required"
          name={name}
          id={id}
          maxLength={maxLength}
        />
      </div>
    );
  }
}

export default Inputs;
