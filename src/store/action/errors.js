import { ADD_ERROR, REMOVE_ERROR } from '../actionTypes';

export const addError = error => ({
  type: ADD_ERROR,
  error, // error message NOT error obj
});

export const removeError = () => ({
  type: REMOVE_ERROR,
});
