import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TypeActions from '../actions';
import { Chrome } from '../components';

class _Overview extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <Chrome {...this.props}>
        <h2>Overview</h2>
      </Chrome>
    );
  }
}

function mapStateToProps(state) {
  return {
    done: state.done,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TypeActions, dispatch),
  };
}

export const Overview = connect(mapStateToProps, mapDispatchToProps)(_Overview);
