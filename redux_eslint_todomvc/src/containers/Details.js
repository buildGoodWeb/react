import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TypeActions from '../actions';
import { ListItem, Chrome } from '../components';

class _Details extends Component {
  render() {
    console.log('this.props', this.props);
    const { done, actions } = this.props;
    return (
      <Chrome>
        <h2>Details</h2>
        <ListItem items={done} deleteItem={actions.del} />
      </Chrome>
    );
  }
}

_Details.propTypes = {
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

export const Details = connect(mapStateToProps, mapDispatchToProps)(_Details);
