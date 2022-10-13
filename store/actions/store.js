export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const doLogin = (token) => {
  return {
    type: LOGIN,
    token: token,
  }
}

export const doLogout = () => {
  return {
    type: LOGOUT,
  }
}