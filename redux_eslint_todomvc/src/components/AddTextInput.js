import React, { Component, PropTypes } from 'react';

export class AddTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.addText = this.addText.bind(this);
    this.state = {
      text: this.props.text || '',
    };
  }

  handleChange(evt) {
    console.log('evt--value:', evt.target.value);
    this.setState({ text: evt.target.value });
  }
  addText() {
    const text = this.state.text.trim();
    if(text) {
      console.log('add text:', text);
      this.props.add(text);
      this.setState({ text: '' });
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          placeholder={this.props.placeholder}
          autoFocus="true"
          onChange={this.handleChange}
        />
        <button onClick={this.addText}>添加</button>
      </div>
    );
  }
}

AddTextInput.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  add: PropTypes.func,
  newToAdd: PropTypes.bool,
};
