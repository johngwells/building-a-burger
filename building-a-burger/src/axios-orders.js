import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-a5c8a.firebaseio.com/'
});

export default instance;