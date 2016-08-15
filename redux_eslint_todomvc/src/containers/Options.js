import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TypeActions from '../actions';
import { AddTextInput, ListItem, Chrome } from '../components';

class _Options extends Component {
  render() {
    const { done, actions } = this.props;
    console.log('this.props', this.props);
    console.log('done', done);
    console.log('actions', actions);
    return (
      <Chrome>
        <AddTextInput {...actions} />
        <ListItem items={done} deleteItem={actions.del} />
      </Chrome>
    );
  }
}

_Options.propTypes = {
  done: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
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

export const Options = connect(mapStateToProps, mapDispatchToProps)(_Options);
