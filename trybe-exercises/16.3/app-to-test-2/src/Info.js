import React from "react";
import { connect } from "react-redux";
import { loadData } from "./actions";
class Info extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    if (this.props.isFetching) {
      return <span>Loading</span>;
    }
    if (this.props.error) {
      return <span>ERROR</span>;
    }
    return <span>Info: {this.props.data}</span>;
  }
}

const mapStateToProps = state => {
  return {
    isFetching: state.ip.isFetching,
    data: state.ip.data.origin,
    error: state.ip.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(loadData())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Info);
