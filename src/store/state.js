import Constant from '../constant';
import CONF from '../Config';

console.log("lll~~~ state.jss start 00 : ");

export default {
  currentView: null,
  mode: 'add',
  contact: {no: 0, name: '', tel: '', address: '', photo: ''},
  // contactlist: {
  //   pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, contacts: [],

  boar: {bno: 0, id: '', title: '', tel: '', address: '', photo: '', firstaddr: '', secaddr: ''},
  title: null,
  boardlist: {
    pageno: 1, pagesize: CONF.PAGESIZE, totalcount: 0, board: [], searchname: ''
  },

  firstaddrlist: null,
  addr: {firstaddr: '', secaddr: '', menunum: ''},
  addrlist: {
    addre: []
  },

  addr02: {firstaddr02: '', secaddr02: '', menunum02: ''},
  addrlist02: {
    addre02: []
  }
}
// totalcount => 원래 0이었음
