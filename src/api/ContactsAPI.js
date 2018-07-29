import CONF from '../Config.js';
import axios from 'axios';

console.log("lll~~~ contactsAPI.js Start 00 : ");

export default {
  // 전체 가져오기
  constGetAll: function (pageno, pagesize, searchname) {
    console.log("lll~~~ contactsAPI.js searchname : " + searchname);
    console.log("lll~~~ contactsAPI.js pageno : " + pageno);
    return axios.get(CONF.GET_ALL, {
      params: {
        pageno: pageno,
        pagesize: pagesize,
        searchname: searchname
      }
    });
  },

  // 1개 등록하기
  constPostOne: function (boar) {
    return axios.post(CONF.POST_ONE, boar);
  }
}
