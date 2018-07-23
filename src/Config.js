var BASE_URL = "/api";

export default {
  PAGESIZE: 10,

  //전체 연락처 데이터 요청(페이징 포함)
  FETCH: BASE_URL + "/contacts_long",
  //연락처 추가
  ADD: BASE_URL + "/contacts",
  //연락처 업데이트
  UPDATE: BASE_URL + "/contacts/${no}",
  //연락처 한건 조회
  FETCH_ONE: BASE_URL + "/contacts/${no}",
  //연락처 삭제
  DELETE: BASE_URL + "/contacts/${no}",
  //연락처 사진 업로드->변경
  UPDATE_PHOTO: BASE_URL + "/contacts/${no}/photo",
  //
  //
  // GET_ALL: BASE_URL + "/getall"

  // 전체 가져오기
  GET_ALL: BASE_URL + "/api/getall",

  // 1개 등록하기
  POST_ONE: BASE_URL + "/api/postone",

  // 1개 삭제하기 -> Update문으로!
  DELETE_ONE: BASE_URL + "/api/deleteone",

  // 전체 삭제하기 -> Update문으로!
  DELETE_ALL: BASE_URL + "/api/deleteall"
};
