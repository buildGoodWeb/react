import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export class Chrome extends Component {
  render() {
    return (
      <div>
        <ul className="sidebar">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Option">Option</Link></li>
          <li><Link to="/Detail">Detail</Link></li>
        </ul>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Chrome.propTypes = {
  // children: PropTypes.node.isRequired,
  // done: PropTypes.array.isRequired,
};
