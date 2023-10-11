import axios from 'axios';

const appUrl = "http://127.0.0.1:8000/";
export const publicRequest = axios.create({
  baseURL: `${appUrl}/api`,
});
