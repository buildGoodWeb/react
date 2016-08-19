import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import style from './style.css';

export class Chrome extends Component {
  render() {
    // console.log('this.props', this.props);
    // console.log('this.props.done', this.props.done);
    return (
      <div>
        <ul className={style.sidebar}>
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
  children: PropTypes.node.isRequired,
  done: PropTypes.array.isRequired,
};
