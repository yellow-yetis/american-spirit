import axios from 'axios';

const TOKEN = 'token';

const SET_USERS = 'SET_USERS';

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const fetchUsers = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN);
    if (token) {
      const response = await axios.get('/api/users', {
        headers: {
          authorization: token,
        },
      });
      const allUsers = response.data;
      return dispatch(setUsers(allUsers));
    }
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};
