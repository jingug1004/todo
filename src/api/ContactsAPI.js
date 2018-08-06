import CONF from '../Config.js';
import axios from 'axios';

console.log("lll~~~ contactsAPI.js Start 00 : ");

export default {
  /* GET */
  // GET 전체 가져오기
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

  constGetFirstaddrSelected: function () { // firstaddr v-for 1st 실렉트문 가져오기
    return axios.get(CONF.GET_FIRSTADDR_SELECTED);
  },

  constGetSecaddrSelected: function (firstaddrval) { // secaddr v-for 2nd 실렉트문 가져오기
    return axios.get(CONF.GET_SECADDR_SELECTED, {
      params: {
        firstclue: firstaddrval
      }
    });
  },


  /* POST */
  constPostOne: function (boar) {   // 1개 등록하기
    console.log("lll~~~ boar : " + boar);
    return axios.post(CONF.POST_ONE, boar);
  }


}
