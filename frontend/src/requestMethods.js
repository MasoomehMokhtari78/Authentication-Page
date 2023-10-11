import axios from 'axios';

const appUrl = "https://authentication-page-orpin.vercel.app";
export const publicRequest = axios.create({
  baseURL: `${appUrl}/api`,
});
