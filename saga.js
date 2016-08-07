import {call, fork, put} from 'redux-saga/effects';
import {takeEvery, takeLatest, delay} from 'redux-saga';
import {gitHubApi} from './api';

// Make Api call
export function* loadUserDetails({ payload }) {
  try {
    const user = yield call(gitHubApi, payload); // Make Api call to Github api with the username
    yield put({type: 'LOAD_USER_SUCCESS', user}); // Yields effect to the reducer specifying the action type and optional parameter
  } catch (error){
    throw error;
  }
}

// Watches for LOAD_USER_REQUEST action and call loadUserDetails with supplied arguments
export function* WatchUserRequest() {
  while(true){
    yield* takeLatest('LOAD_USER_REQUEST', loadUserDetails);
  }
}

export default function* startForman(){
  yield fork(WatchUserRequest);
}

