const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USER_SUCCESS':
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
