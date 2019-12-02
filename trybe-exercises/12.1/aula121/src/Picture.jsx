import React from "react";
class Picture extends React.Component {
  render() {
    return (
      <div className="picture">
        <img src={this.props.src} className="picture" alt={this.props.alt} />
        {this.props.children}
      </div>
    );
  }
}

export default Picture;
