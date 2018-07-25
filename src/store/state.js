import Constant from '../constant';
import CONF from '../Config';

export default {
  currentView: null,
  mode: 'add',
  contact: {no: 0, name: '', tel: '', address: '', photo: ''},
  // contactlist: {
  //   pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, contacts: [],

  board: {no: 0, title: '', tel: '', address: '', photo: ''},
  title: null,
  boardlist: {
    pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 51, board: []
  }
}
// totalcount => 원래 0이었음
