import { CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER } from './types';

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

export function fetchPosts() {
  const URL = 'https://jsonplaceholder.typicode.com/posts?_limit=5';
  return async dispatch => {
    dispatch(showSpinner());
    const response = await fetch(URL);
    const json = await response.json();
    dispatch({ type: FETCH_POSTS, payload: json });
    dispatch(hideSpinner());
  };
}

//
export function showSpinner() {
  return {
    type: SHOW_LOADER
  };
}

export function hideSpinner() {
  return {
    type: HIDE_LOADER
  };
}
