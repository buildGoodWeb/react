import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TypeActions from '../actions';
import { ListItem, Chrome } from '../components';

class _Details extends Component {
  render() {
    const { done, del } = this.props;
    return (
      <Chrome {...this.props}>
        <h2>Details</h2>
        <ListItem items={done} deleteItem={del} />
      </Chrome>
    );
  }
}

_Details.propTypes = {
  done: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    done: state.done,
  };
}

export const Details = connect(mapStateToProps, TypeActions)(_Details);
