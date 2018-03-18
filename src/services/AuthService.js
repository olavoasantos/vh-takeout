import StorageService from '../services/StorageService';

const check = () => {
  return (StorageService('user').get() !== null);
}

const login = (user, token) => {
  StorageService('user').set(user);
  StorageService('token').set(token.data);
}

const logout = () => {
  StorageService('user').remove();
  StorageService('token').remove();
}

export default { check, login, logout }
