import { combineReducers } from 'redux';

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
      return {...state,  user:action.user};
    default:
      return state;
  }
};

export default combineReducers({user: userReducer});
