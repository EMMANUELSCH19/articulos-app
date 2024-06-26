import axios from "axios";
const base_api_url = "http://127.0.0.1:8000/api/v1";

export default {
  GetRegister: (data) => axios.post(`${base_api_url}/auth/register`, data),
  GetLogin: (data) => axios.post(`${base_api_url}/auth/login`, data),
  GetLogout: () => axios.post(`${base_api_url}/auth/logout`, null, {
    headers: {
      'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`
    }
  }),
};