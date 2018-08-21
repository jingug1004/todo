<template>
  <div class="modal">
    <div class="form" @keyup.esc="cancelEvent()">
      <h3 class="heading">:: {{headingText}}</h3>
      <div v-if="mode=='update'" class="form-group">
        <label>일련번호</label>
        <!--<input type="text" name="no" class="long" disabled v-model="contact.no"/>-->
      </div>
      <div class="form-group">
        <label>지역1</label>
        <!--<select @change="region1Event" v-model="menunum" class="long">-->
          <!--<option disabled="disabled" selected>지역을 선택하세요</option>-->
          <!--<option v-for="addr in addrlist.addre" name="firstaddr" :value="addr.menunum"-->
                  <!--:key="addr.firstaddr">-->
            <!--{{addr.firstaddr}}-->
          <!--</option>-->
        <!--</select>-->
      </div>
      <div class="form-group">
        <label>지역2</label>
        <!--<select @change="region2Event" v-model="menunum02" class="long">-->
          <!--<option disabled="disabled" selected>지역을 선택하세요</option>-->
          <!--<option v-for="addr02 in addrlist02.addre02" name="secaddr" :value="addr02.menunum02"-->
                  <!--:key="addr02.secaddr02">-->
            <!--{{addr02.secaddr02}}-->
          <!--</option>-->
        <!--</select>-->
      </div>

      <!--<div class="form-group">-->
        <!--<label>프로젝트 이름</label>-->
        <!--<input type="text" name="searchname" class="long" v-on:input="writePrj" v-bind:value="seldata03"/>-->
      <!--</div>-->
      <!--<div class="form-group">-->
        <!--<div>&nbsp;</div>-->
        <!--<input type="button" class="appButton"-->
               <!--v-bind:value="btnText" @click="submitEvent()"/>-->
        <!--<input type="button" class="appButton"-->
               <!--value="취 소" @click="cancelEvent()"/>-->
      <!--</div>-->
    </div>
      <div class="slogan">
        <h1>Vue-Pull-To</h1>
        <p>for Vue.js 2.0</p>
        <svg class="icon icon-face" aria-hidden="true">
          <use xlink:href="#icon-face-20"></use>
        </svg>
      </div>
      <pull-to class="scroller-view">
        <ul class="list">
          <li>
            <router-link href="/bounce-scroll">
              Bounce scroll
              <svg class="icon icon-arrow" aria-hidden="true">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </router-link>
          </li>
          <li>
            <router-link href="/simple-pullto-refresh">
              Simple pull to refresh
              <svg class="icon icon-arrow" aria-hidden="true">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </router-link>
          </li>
          <li>
            <router-link href="/simple-pullto-loadmore">
              Simple pull to load more
              <svg class="icon icon-arrow" aria-hidden="true">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </router-link>
          </li>
          <li>
            <router-link href="/infinite-scroll">
              Infinite scroll
              <svg class="icon icon-arrow" aria-hidden="true">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </router-link>
          </li>
        </ul>
      </pull-to>
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

  import PullTo from './vue-pull-to.vue';
  import RouterLink from './RouterLink.vue';

  export default {
    name: "todoLoadBoards",
    data: function () {
      return {mode: "add"}
    },
    props: ['no'],
    computed: _.extend({
        btnText: function () {
          if (this.mode != 'update')
            return '추 가';
          else
            return '수 정';
        },
        headingText: function () {
          if (this.mode != 'update')
            return '새로운 연락처 추가';
          else
            return '연락처 변경';
        }
      },
      mapState(['contact', 'contactlist'])
    ),
    mounted: function () {
//      this.$refs.name.focus();
      var cr = this.$router.currentRoute;
      if (cr.fullPath.indexOf('/add') > -1) {
        this.mode = "add";
        this.$store.dispatch(Constant.INITIALIZE_CONTACT_ONE);
      } else if (cr.fullPath.indexOf('/update') > -1) {
        this.mode = "update";
        this.$store.dispatch(Constant.FETCH_CONTACT_ONE, {no: this.no});
      }
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
        this.$router.push({name: 'contacts', query: {page: this.contactlist.pageno}});
      }
    },
    components: {
      RouterLink,
      PullTo
    }
  }
</script>

<style scoped >
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

  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .scroller-view {
    flex: 1;
  }

  .slogan {
    margin-top: 50px;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
    text-align: center;
  }

  .icon-face {
    margin-top: 15px;
    width: 100%;
    height: 100px;
  }


  h1 {
    font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
    text-align: center;
    font-size: 35px;
    font-weight: 500;
  }

  .list {
    margin-top: 30px;
    font-size: 16px;
  }

  li:nth-child(even) {
    background: #eee;
  }

  li {
    padding-left: 15px;
    height: 50px;
    line-height: 50px;
    background: #fff;
  }

  a {
    display: block;
    height: 100%;
  }

  .icon-arrow {
    display: inline-block;
    float: right;
    margin-right: 15px;
    height: 100%;
    width: 20px;
    color: #444;
  }

</style>
