import CONF from '../Config.js';
import axios from 'axios';

export default {
  constGetAll: function () {
    return axios.get(CONF.GET_ALL);
  }
}
