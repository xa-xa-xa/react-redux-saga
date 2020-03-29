import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_POSTS, FETCH_POSTS } from './types';
import { showSpinner, hideSpinner, showAlert } from './actions';

export function* sagaWatcher() {
  console.log('SAGA');
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(showSpinner());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS, payload });
    yield put(hideSpinner());
  } catch (error) {
    yield put(hideSpinner());
    yield put(showAlert('Something went wrong...'));
  }
}

async function fetchPosts() {
  const URL = 'https://1jsonplaceholder.typicode.com/posts?_limit=5';

  const response = await fetch(URL);
  return await response.json();
}
