// Reducer
const defaultState = {
  user: []
};

export default function userReducer(state = defaultState.user, action) {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
      return [...state, action.user];
    default:
      return state;
  }
}
