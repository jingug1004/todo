import CONF from '../Config.js';
import axios from 'axios';

export default {
  constGetAll: function (pageno, pagesize) {
    return axios.get(CONF.GET_ALL, {
      params: {
        pageno: pageno,
        pagesize: pagesize
      }
    });
  }
}
