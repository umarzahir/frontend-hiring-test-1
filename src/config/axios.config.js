import axios from "axios";

const baseUrl = "https://frontend-test-api.aircall.io";

let token;

if(typeof window !== 'undefined' && window.localStorage){
    console.log(localStorage.getItem("token"))
    token  = localStorage.getItem("token")
}

export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});



http.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (err) => {
    throw new Error(err);
  }
);

export default http