import contactAPI from '../api/ContactsAPI';
import Constant from '../constant';

export default {
  [Constant.ADD_CONTACT_FORM]: (store) => { //입력폼 나타내기 02/09      01/09
    store.commit(Constant.ADD_CONTACT_FORM);
  },

  [Constant.ADD_CONTACT]: (store) => { //연락처 추가 03/09     02/09
    // store.dispatch(Constant.CHANGE_ISLOADING, {isloading: true});
    contactAPI.addContact(store.state.contact)
      .then((response) => {
        if (response.data.status == "success") {
          store.dispatch(Constant.CANCEL_FORM);
          store.dispatch(Constant.FETCH_CONTACTS, {pageno: 1});
        } else {
          console.log("연락처 추가 실패 : " + response.data);
        }
      })
  },

  [Constant.EDIT_CONTACT_FORM]: (store, payload) => { //수정폼 나타내기 04/09      03/09
    contactAPI.fetchContactOne(payload.no)
      .then((response) => {
        store.commit(Constant.EDIT_CONTACT_FORM, {contact: response.data});
      })
  },

  [Constant.UPDATE_CONTACT]: (store) => { //연락처 수정 05/09      04/09
    // store.dispatch(Constant.CHANGE_ISLOADING, {isloading: true});
    var currentPageNo = store.state.contactlist.pageno;
    contactAPI.updateContact(store.state.contact)
      .then((response) => {
        if (response.data.status == "success") {
          store.dispatch(Constant.CANCEL_FORM);
          store.dispatch(Constant.FETCH_CONTACTS, {pageno: currentPageNo});
        } else {
          console.log("연락처 변경 실패 : " + response.data)
        }
      })
  },

  [Constant.EDIT_PHOTO_FORM]: (store, payload) => { //사진 편집폼 나타내기 07/09     05/09
    contactAPI.fetchContactOne(payload.no)
      .then((response) => {
        store.commit(Constant.EDIT_PHOTO_FORM, {contact: response.data});
      })
  },

  [Constant.UPDATE_PHOTO]: (store, payload) => { //사진 수정 08/09      06/09
    var currentPageNo = store.state.contactlist.pageno;
    // store.dispatch(Constant.CHANGE_ISLOADING, {isloading: true});
    contactAPI.updatePhoto(payload.no, payload.file)
      .then((response) => {
        store.dispatch(Constant.CANCEL_FORM);
        store.dispatch(Constant.FETCH_CONTACTS, {pageno: currentPageNo});
      })
  },

  [Constant.FETCH_CONTACTS]: (store, payload) => { //연락처 조회 01/09     07/09
    var pageno;
    if (typeof payload === "undefined" || typeof payload.pageno === "undefined")
      pageno = 1;
    else
      pageno = payload.pageno;
    var pagesize = store.state.contactlist.pagesize;
    // store.dispatch(Constant.CHANGE_ISLOADING, {isloading: true});
    contactAPI.fetchContacts(pageno, pagesize)
      .then((response) => {
        store.commit(Constant.FETCH_CONTACTS, {contactlist: response.data});
        // store.dispatch(Constant.CHANGE_ISLOADING, {isloading: false});
      })
  },

  [Constant.CANCEL_FORM]: (store, payload) => { //입력, 수정폼 닫기 06/09      08/09
    store.commit(Constant.CANCEL_FORM);
  },

  [Constant.DELETE_CONTACT]: (store, payload) => { //연락처 삭제 09/09     09/09
    // store.dispatch(Constant.CHANGE_ISLOADING, {isloading: true});
    var currentPageNo = store.state.contactlist.pageno;
    contactAPI.deleteContact(payload.no)
      .then((response) => {
        store.dispatch(Constant.FETCH_CONTACTS, {pageno: currentPageNo});
      })
  },


  [Constant.CHANGE_MODE]: (store, payload) => {
    store.commit(Constant.CHANGE_MODE, {mode: payload.mode});
  },
  [Constant.CHANGE_ISLOADING]: (store, payload) => {
    store.commit(Constant.CHANGE_ISLOADING, payload)
  },
  [Constant.FETCH_CONTACT_ONE]: (store, payload) => {
    store.dispatch(Constant.CHANGE_ISLOADING, {isloading: true});
    contactAPI.fetchContactOne(payload.no)
      .then((response) => {
        store.commit(Constant.FETCH_CONTACT_ONE, {contact: response.data});
        store.dispatch(Constant.CHANGE_ISLOADING, {isloading: false});
      })
  },
  [Constant.INITIALIZE_CONTACT_ONE]: (store) => {
    store.commit(Constant.INITIALIZE_CONTACT_ONE);
  }
}
