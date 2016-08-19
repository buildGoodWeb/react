import React, { Component, PropTypes } from 'react';
import style from './style.css';

export class ListItem extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <ul className={style.normal}>
        {this.props.items.map(item => {
          return (
            <li key={item.id}>
              {item.text}
              <button
                style={{ float: 'right' }}
                onClick={() => {
                  this.props.deleteItem(item.id);
                }}
              >
                删除
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ListItem.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
