import * as types from '../constants';

export function add(text) {
  return {
    type: types.ADD,
    text,
  };
}

export function del(id) {
  return {
    type: types.DELETE,
    id,
  };
}
