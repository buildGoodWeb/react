import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TypeActions from '../actions';
import { AddTextInput, ListItem, Chrome } from '../components';

class _Options extends Component {
  render() {
    const { done, del } = this.props;
    return (
      <Chrome {...this.props}>
        <h2>Options</h2>
        <AddTextInput {...this.props} />
        <ListItem items={done} deleteItem={del} />
      </Chrome>
    );
  }
}

_Options.propTypes = {
  done: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    done: state.done,
  };
}

export const Options = connect(mapStateToProps, TypeActions)(_Options);
