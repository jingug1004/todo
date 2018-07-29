<template>
  <div class="modal">
    <div class="form" @keyup.esc="cancelEvent()">
      <h3 class="heading">:: {{headingText}}</h3>
      <div v-if="mode=='update'" class="form-group">
        <label>일련번호</label>
        <input type="text" name="no" class="long" disabled v-model="contact.no"/>
      </div>
      <div class="form-group">
        <label>지역1</label>
        <input type="text" name="name" class="long" v-model="contact.name"
               ref="name" placeholder="지역을 입력하세요"/>
      </div>
      <div class="form-group">
        <label>지역2</label>
        <input type="text" name="tel" class="long" v-model="contact.tel"
               placeholder="전화번호를 입력하세요"/>
      </div>
      <div class="form-group">
        <label>프로젝트 이름</label>
        <input type="text" name="address" class="long" v-model="contact.address"
               placeholder="주소를 입력하세요"/>
      </div>
      <div class="form-group">
        <div>&nbsp;</div>
        <input type="button" class="appButton"
               v-bind:value="btnText" @click="submitEvent()"/>
        <input type="button" class="appButton"
               value="취 소" @click="cancelEvent()"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Constant from '../../constant';
  import {mapState} from 'vuex';
  import _ from 'lodash';

  import Modal from '../common/Modal.vue';
  import Paginate from 'vuejs-paginate';
  import Velocity from 'velocity-animate';
  import store from "../../store/index";

  export default {
    name: "contactForm",
    data: function () {
      return {mode: "add"}
    },
//    props: ['no'],
    computed: _.extend({
        btnText: function () {
          if (this.mode != 'update')
            return '추 가';
          else
            return '수 정';
        },
        headingText: function () {
          if (this.mode != 'update')
            return '새로운 프로젝트 추가';
          else
            return '연락처 변경';
        }
      },
      mapState(['contact', 'contactlist'])
    ),
    mounted: function () {
//      this.$refs.name.focus();
//      var cr = this.$router.currentRoute;
//      if (cr.fullPath.indexOf('/add') > -1) {
//        this.mode = "add";
//        this.$store.dispatch(Constant.INITIALIZE_CONTACT_ONE);
//      } else if (cr.fullPath.indexOf('/update') > -1) {
//        this.mode = "update";
//        this.$store.dispatch(Constant.FETCH_CONTACT_ONE, {no: this.no});
//      }
    },
    methods: {
      submitEvent: function () {
        if (this.mode == "update") {
          this.$store.dispatch(Constant.UPDATE_CONTACT);                                  //연락처 수정           05/09 PUT
          this.$router.push({name: 'contacts', query: {page: this.contactlist.pageno}});
        } else {
          this.$store.dispatch(Constant.ADD_CONTACT);                                     //연락처 추가           03/09 POST
          this.$router.push({name: 'contacts', query: {page: 1}});
        }
      },
      cancelEvent: function () {
//        alert("!!!~~~ pageno : " + this.boardlist.pageno);
//        alert("!!!~~~ pageno : ");
//        pageno = this.contactlist.pageno;
//        this.$router.push({name: 'about', query: {page: this.boardlist.pageno}});
//        var pageno = 1;
//        this.$router.push({name: 'about', query: {page: pageno}});
        this.$router.push({name: 'about'});
      }
    }
  }
</script>

<style scoped>
  .modal {
    display: block;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .form {
    background-color: white;
    margin: 100px auto;
    /*max-width: 400px;*/
    /*min-width: 200px;*/
    max-width: auto;
    min-width: auto;
    font: 13px "verdana";
    padding: 10px 10px 10px 10px;
  }

  .form div {
    padding: 0;
    display: block;
    margin: 10px 0 0 0;
  }

  .form label {
    text-align: left;
    margin: 0 0 3px 0;
    padding: 0px;
    display: block;
    font-weight: bold;
    font: 15px "verdana";
  }

  .form input, textarea, select {
    box-sizing: border-box;
    border: 1px solid #BEBEBE;
    padding: 7px;
    margin: 0px;
    outline: none;
  }

  .form .long {
    width: 100%;
  }

  .form .button {
    background: #2B798D;
    padding: 8px 15px 8px 15px;
    border: none;
    color: #fff;
  }

  .form .button:hover {
    background: #4691A4;
  }

  .form .heading {
    background: linear-gradient(#6478FB, #8763FB);
    font-weight: 300;
    text-align: left;
    padding: 20px;
    color: #fff;
    margin: 5px 0 30px 0;
    padding: 10px;
    /*min-width: 200px;*/
    /*max-width: 400px;*/
    min-width: auto;
    max-width: auto;
    font: 25px "verdana";
  }

  .appButton {
    background: linear-gradient(#6478FB, #8763FB);
    color: #fff;
    border: none;
    position: relative;
    height: 40px;
    font-size: 1.6em;
    padding: 0 0.5rem;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
    font: 15px "verdana";
    width: 60px;
  }


  .appButton:hover {
    background: #fff;
    color: #6478FB;
  }

  .appButton:before, .appButton:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: #8763FB;
    transition: 400ms ease all;
  }

  .appButton:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }

  .appButton:hover:before, .appButton:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
</style>
