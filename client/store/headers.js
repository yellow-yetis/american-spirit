const TOKEN = 'token';
const token = window.localStorage.getItem(TOKEN);
export const tokenHeader = {
  headers: {
    authorization: token,
  },
};

// Module.exports {
//   tokenHeader
// }
