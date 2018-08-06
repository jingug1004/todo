<template>
  <div class="inputBox shadow">
    <!--<input type="text" v-model="newTodoItem" placeholder="Type What you have to do"-->
    <!--v-on:keyup.enter="addTodo"> &lt;!&ndash; 검색어 입력하고 엔터 눌렀을 때 &ndash;&gt;-->
    <keep-alive>
      <input type="text" placeholder="Type What you have to do"
             v-on:input="addWriteTodo" v-bind:value="newTodoItem"> <!-- 검색어 입력하고 엔터 눌렀을 때 -->
    </keep-alive>
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i> <!-- 검색어 입력하고 옆의 플러스 버튼 클릭했을 때 -->
    </span>
    <!--<router-link class="button-reset" v-bind:to="{name:'addcontact'}">새로운 연락처 추가하기1</router-link>-->
    <!--<router-link class="button-reset" to="/about/add">새로운 연락처 추가하기1</router-link>-->
    <!--<router-link class="button-reset" v-bind:to="'/about/add'">새로운 연락처 추가하기1</router-link>-->
    <router-view></router-view>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">경고</h3>
      <span slot="footer" @click="showModal = false">검색부터 진행해주세요.
        <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
      </span>
    </modal>
    <!--<button v-on:click="addTodo">추가</button>-->
    <!--<router-link class="button-reset" v-on:click="greet">새로운 연락처 추가하기1</router-link>-->
    <!--<router-link class="addBtn fa fa-plus" @click="greet()">새로운 연락처 추가하기1</router-link>-->
  </div>
</template>

<script>
  import Modal from '../common/Modal.vue';
  import Constant from '../../constant';
  import {mapState} from 'vuex';
  import Paginate from 'vuejs-paginate';
  import _ from 'lodash';
  import Velocity from 'velocity-animate';
  import store from "../../store/index";

  export default {
    props: ['propsdata'],
    data() {
      return {
        newTodoItem: '',
        showModal: false
      }
    },
    methods: {
      greet: function () {
        alert("!!!~~~ ");
      },
      addTodo() {
        if (this.newTodoItem !== "") {
          var value = this.newTodoItem && this.newTodoItem.trim();
//          this.$emit('addTodo', value);
//          alert("여기!");
          this.$router.push({name: 'addproject', paramas: {searchname: value}});
          this.clearInput();
        } else {
          this.showModal = !this.showModal;
        }
      },
      addWriteTodo(event) {
        if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
        }
        this.timer = setTimeout(() => {

          var page = 1;
          if (this.$route.query && this.$route.query.page) {
            page = parseInt(this.$route.query.page);
          }

          this.newTodoItem = event.target.value;
          var searchname = this.newTodoItem.trim();
//          if (searchname !== "" || searchname === null) {
//            page = 1;
//          }
//          this.$store.commit('addWriteTodo', searchname);
          this.$store.dispatch(Constant.CONST_GET_ALL, {pageno: page, searchname: searchname});

        }, 1000);
      },
      clearInput() {
        this.newTodoItem = '';
      }
    },

//    watch: {
//      '$route': function (to, from) {
//        if (to.query.page && to.query.page != this.boardlist.pageno) {
//          console.log("lll~~~@@@ to.query.page : " + to.query.page);
//          var page = to.query.page;
//          var searchname = to.query.searchname;
//          this.$store.dispatch(Constant.CONST_GET_ALL, {pageno: page, searchname: searchname});
//          this.$refs.pagebuttons.selected = page - 1;
//          console.log("lll~~~ watch : ");
//        }
//      }
//    },
    components: {
      Modal: Modal
    }

  };
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }


</style>

<!--
// ===== Process
Constant.js(상수) -> Config.js -> API(axios) -> State -> Mutation -> Action -> main.js(children) -> component
State -> Getter -> Mutation -> Action -> Module
// ===== Process
-->
