// Import
import axios from "axios";

// Token
//let token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  //authorization: {token}
};

const burl = "http://localhost:8800";

export default {
  
  login: function(email, password) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password,
      },
      {
        headers: headers
      }
    );
  },

  signup: function(send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },

  logout: function() {
    localStorage.clear();
  }
};