import {
  CREATE_POST,
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_ALERT,
  HIDE_ALERT,
  REQUEST_POSTS
} from './types';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

// SPINNER
export function showSpinner() {
  return {
    type: SHOW_SPINNER
  };
}

export function hideSpinner() {
  return {
    type: HIDE_SPINNER
  };
}
// ALERT
export function showAlert(text) {
  return dispatch => {
    dispatch({ type: SHOW_ALERT, payload: text });
    setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);
  };
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  };
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  };
}
