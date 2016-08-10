import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TypeActions from '../actions';
import { AddTextInput, ListItem } from '../components';

class _App extends Component {

  render() {
    const { done, actions } = this.props;
    console.log('done', done);
    console.log('actions', actions);
    return (
      <div>
        <AddTextInput {...actions} />
        <ListItem items={done} deleteItem={actions.del} />
      </div>
    );
  }
}

_App.propTypes = {
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

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
