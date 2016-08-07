import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { gitHubApi } from './api';

// Make Api call
function* loadUserDetails(action){
  const user = yield call(gitHubApi, action.username); // Make Api call to Github api with the username
  yield put({type: 'LOAD_USER_SUCCESS', user}); // Yields effect to the reducer specifying the action type and optional parameter
}

// Watches for LOAD_USER_REQUEST action and call loadUserDetails with supplied arguments
export  default function* WatchUserRequest() {
  yield* takeEvery('LOAD_USER_REQUEST', loadUserDetails);
}
