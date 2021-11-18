const TOKEN = 'token';
export const token = window.localStorage.getItem(TOKEN);
export const tokenHeader = {
  headers: {
    authorization: token,
  },
};
