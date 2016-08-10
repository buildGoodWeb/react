import { combineReducers } from 'redux';
import { ADD, DELETE } from '../constants';

const initialState = [
  {
    text: 'Use Redux',
    id: 0,
  },
];

function done(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text,
        },
        ...state
      ];
    case DELETE:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  done,
});

export default rootReducer;
