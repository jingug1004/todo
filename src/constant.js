console.log("lll~~~ constant.js Start 00 : ");

export default {
  /*
  FETCH_CONTACTS: "fetchContacts",                 //연락처 조회 01/09
  ADD_CONTACT_FORM: "addContactForm",              //입력폼 나타내기 02/09
  ADD_CONTACT: "addContact",                       //연락처 추가 03/09
  EDIT_CONTACT_FORM: "editContactForm",            //수정폼 나타내기 04/09
  UPDATE_CONTACT: "updateContact",                 //연락처 수정 05/09

  CANCEL_FORM: "cancelForm",                       //입력, 수정폼 닫기 06/09
  EDIT_PHOTO_FORM: "editPhotoForm",                //사진 편집폼 나타내기 07/09
  UPDATE_PHOTO: "updatePhoto",                     //사진 수정 08/09
  DELETE_CONTACT: "deleteContact",                 //연락처 삭제 09/09

  FETCH_CONTACT_ONE: "fetchContactOne",
  CHANGE_ISLOADING: "changeIsLoading",
  INITIALIZE_CONTACT_ONE: "initializeContactOne"
  */

  /* GET */
  CONST_GET_ALL: "constGetAll",                                // 전체 가져오기
  CONST_GET_POST_ONE_FORM: "constGetPostOneForm",              // 1개 등록할 폼 띄우기

  CONST_GET_CANCEL_FORM: "constGetCancelForm",                 // 입력, 수정폼 닫기 06/09

  CONST_GET_FIRSTADDR_SELECTED: "constGetFirstaddrSelected",   // firstaddr v-for 1st 실렉트문 가져오기
  CONST_GET_SECADDR_SELECTED: "constGetSecaddrSelected",       // secaddr v-for 2nd 실렉트문 가져오기


  /* POST */
  CONST_POST_ONE: "constPostOne",                              // 1개 등록하기
  CONST_LOAD_BOARDS: "constLoadBoards",                        // 글 클릭시 글 내용들 가져오기

  /* INITIALIZE */
  INITIALIZE_CONTACT_ONE_FIRSTADDR: "initializeContactOneFirstaddr",
  INITIALIZE_CONTACT_ONE_SECADDR: "initializeContactOneSecaddr",
  INITIALIZE_CONTACT_ONE_THIRDPRJNAME: "initializeContactOneThirdprjname",



  CONST_DELETE_ONE: "constDeleteOne",                          // 1개 삭제하기 -> Update문으로!
  CONST_DELETE_ALL: "constDeleteAll"                           // 전체 삭제하기 -> Update문으로!


}
