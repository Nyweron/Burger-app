import axios from 'axios';

const instance = axios.create({
 // baseURL: 'http://localhost:6346/'
  baseURL: 'https://burger-b0680.firebaseio.com'
});

export default instance;
