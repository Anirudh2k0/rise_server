import jwtDecode from 'jwt-decode';

const tokenKey = 'userToken';

export const login = (token) => {
  localStorage.setItem(tokenKey, token);
  window.location.reload();
};

export const logout = () => {
  localStorage.removeItem(tokenKey);
  window.location.reload();
};

export const getUser = (returnToken = false) => {
  try {
    const token = localStorage.getItem(tokenKey);
    const user = jwtDecode(token);
    return returnToken ? token : user;
  } catch (error) {
    return false;
  }
};
