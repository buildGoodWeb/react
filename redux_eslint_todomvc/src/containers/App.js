import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TypeActions from '../actions';


export class _App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

_App.propTypes = {
  children: PropTypes.object.isRequired,
};

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

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
