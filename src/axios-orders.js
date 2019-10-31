import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:6346/'
});


export default instance;