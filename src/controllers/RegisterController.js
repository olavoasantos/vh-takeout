import axios from "axios";
import AuthService from "../services/AuthService";

export const register = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`http://api-vanhack-event-sp.azurewebsites.net/api/v1/Customer`, data)
          .then(response => {
            delete data['password'];
            AuthService.login(data, response)
            resolve(data);
          })
          .catch(errors => {
            console.log(errors)
            reject(errors);
          })
    try {
      resolve({ id: 1, email: data['email'] });
    } catch(e) {
      reject(e);
    }
  });
}

export default {
  register
}
