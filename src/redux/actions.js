import {
  CREATE_POST,
  FETCH_POSTS,
  SHOW_SPINNER,
  HIDE_SPINNER,
  SHOW_ALERT,
  HIDE_ALERT
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
  const URL = 'https://1jsonplaceholder.typicode.com/posts?_limit=5';

  return async dispatch => {
    try {
      dispatch(showSpinner());
      const response = await fetch(URL);
      const data = await response.json();
      setTimeout(() => {
        dispatch({ type: FETCH_POSTS, payload: data });
        dispatch(hideSpinner());
      }, 700);
    } catch (error) {
      dispatch(hideSpinner());
      dispatch(showAlert('Something went wrong...'));
    }
  };
}
