import Constant from '../constant';
import CONF from '../Config';

console.log("lll~~~ state 01 : ");

export default {
  currentView: null,
  mode: 'add',
  contact: {no: 0, name: '', tel: '', address: '', photo: ''},
  // contactlist: {
  //   pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, contacts: [],

  boar: {no: 0, title: '', tel: '', address: '', photo: ''},
  title: null,
  boardlist: {
    pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, board: []
  }
}
// totalcount => 원래 0이었음
