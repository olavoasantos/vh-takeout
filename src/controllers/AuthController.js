import axios from 'axios';
import AuthService from "../services/AuthService";

export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`http://api-vanhack-event-sp.azurewebsites.net/api/v1/Customer/auth?email=${data.email}&password=${data.password}`)
          .then(response => {
            delete data['password'];
            resolve(data);
            AuthService.login(data, response);
          })
          .catch(error => {
            reject({error: 'Login fail'});
          });
  });
}

export const logout = () => {
  AuthService.logout();
}

export default {
  login, logout
}
