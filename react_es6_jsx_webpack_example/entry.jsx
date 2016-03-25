import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

import Hello from './js/hello.jsx';

let App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Hello/>
        App nav content
      </div>
    );
  }
});


render(
  (<App/>), document.getElementById('content'));
