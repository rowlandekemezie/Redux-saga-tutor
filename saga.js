import { call, put } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import { gitHubApi } from './api';

// Make Api call
export function* loadUserDetails({ payload }) {
  try {
    // Make Api call to Github api with the username
    const user = yield call(gitHubApi, payload);
    // Yields effect to the reducer specifying the action type and user property
    yield put({ type: 'LOAD_USER_SUCCESS', user });
  } catch (error) {
    throw error;
  }
}

// Watches for LOAD_USER_REQUEST action and call loadUserDetails with supplied arguments
export default function* WatchUserRequest() {
  yield* takeLatest('LOAD_USER_REQUEST', loadUserDetails);
}

