import Constant from '../constant';
import state from "./state";

console.log("lll~~~ Mutations 00 : ");

//상태를 변경하는 기능만을 뽑아서...
export default {
  [Constant.FETCH_CONTACTS]: (state, payload) => {
    state.contactlist = payload.contactlist;
  },
  [Constant.FETCH_CONTACT_ONE]: (state, payload) => {
    state.contact = payload.contact;
  },
  [Constant.INITIALIZE_CONTACT_ONE]: (state) => {
    state.contact = {no: '', name: '', tel: '', address: '', photo: ''};
  },
  [Constant.CHANGE_ISLOADING]: (state, payload) => {
    state.isloading = payload.isloading;
  },
  [Constant.ADD_CONTACT_FORM]: (state) => {
    state.contact = {no: '', name: '', tel: '', address: '', photo: ''};
    state.mode = "add";
    state.currentView = "contactForm";
  },
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
  [Constant.FETCH_CONTACTS]: (state, payload) => {
    state.contactlist = payload.contactlist;
  },

  [Constant.CONST_GET_ALL]: (state, payload) => {         // 게시글 전체 가져오기
    console.log("lll~~~ Mutations 01 : ");
    state.boardlist = payload.boardlist;
  }

}
