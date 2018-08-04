import Constant from '../constant';
import state from "./state";

console.log("lll~~~ mutations.js Start 00 : ");

//상태를 변경하는 기능만을 뽑아서...
export default {
  // [Constant.FETCH_CONTACTS]: (state, payload) => {
  //   state.contactlist = payload.contactlist;
  // },
  [Constant.FETCH_CONTACT_ONE]: (state, payload) => {
    state.contact = payload.contact;
  },
  [Constant.INITIALIZE_CONTACT_ONE]: (state) => {
    state.contact = {no: '', name: '', tel: '', address: '', photo: ''};
  },
  [Constant.CHANGE_ISLOADING]: (state, payload) => {
    state.isloading = payload.isloading;
  },
  // [Constant.ADD_CONTACT_FORM]: (state) => {
  //   state.contact = {no: '', name: '', tel: '', address: '', photo: ''};
  //   state.mode = "add";
  //   state.currentView = "contactForm";
  // },
  [Constant.CANCEL_FORM]: (state) => {
    state.currentView = null;
  },
  [Constant.EDIT_CONTACT_FORM]: (state) => {
    state.contact = payload.contact;
    state.mode = "update";
    state.currentView = "contactForm";
  },
  [Constant.EDIT_PHOTO_FORM]: (state, payload) => {
    state.contact = payload.contact;
    state.currentView = "updatePhoto";
  },

  /* GET */
  // GET 게시글 전체 가져오기
  [Constant.CONST_GET_ALL]: (state, payload) => {         // 게시글 전체 가져오기
    state.boardlist = payload.boardlist;
  },

  // GET 1개 입력할 입력 폼 가져오기
  [Constant.CONST_GET_POST_ONE_FORM]: (state) => {
    state.boar = {title: '', firstaddr: '', secaddr: ''};
    state.mode = "add";
    state.currentView = "todoInputForm";
    // state.searchname = "삼성1";
  },

  // GET 수정, 입력 폼에서 취소
  [Constant.CONST_GET_CANCEL_FORM]: (state) => {
    state.currentView = null;
  },

  [Constant.CONST_GET_FIRSTADDR_SELECTED]: (state, payload) => { // GET select 주소 1 리스트 가져오기
    state.addrlist = payload.addrlist;
    // console.log("lll~~~ mutations.js CONST_GET_FIRSTADDR_SELECTED 03 : " + state);
    // console.log("lll~~~ mutations.js CONST_GET_FIRSTADDR_SELECTED 04 : " + payload);
    // state.firstaddr = "firstaddr";
  },

  [Constant.CONST_GET_SECADDR_SELECTED]: (state, payload) => { // GET select 주소 2 리스트 가져오기
    state.addrlist02 = payload.addrlist02;
    console.log("lll~~~ mutations.js CONST_GET_FIRSTADDR_SELECTED 03 : " + state);
    console.log("lll~~~ mutations.js CONST_GET_FIRSTADDR_SELECTED 04 : " + payload);
    // state.firstaddr = "firstaddr";
  }


}
