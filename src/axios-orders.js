// Importing axios globally here

import axios from 'axios';

// Pass JS object to configure it
// Instance should be stored in variable
// Where data will be stored
const instance = axios.create({
  baseURL:  'https://cors-anywhere.herokuapp.com/https://react-burger-builder-1b8c6.firebaseio.com/'
});

export default instance;