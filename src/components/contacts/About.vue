<template>
  <div id="about">
    <div id="example">
      <div class="panel panel-default">
        <div class="panel-heading">About</div>
        <div class="panel-body">About 화면입니다</div>
      </div>
    </div>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
    <loading v-show="isloading"></loading>
  </div>
</template>
<script>
//  import TodoHeader from '../../components/TodoHeader.vue';
  import TodoInput from '../about/TodoInput.vue';
  import TodoList from '../about/TodoList.vue';
  import TodoFooter from '../about/TodoFooter.vue';

  import CONF from '../../Config';

  import Loading from '../../components/Loading.vue';
  import {mapState} from 'vuex';
  import VueRouter from 'vue-router';

  export default {
    name: 'about',
    components: {Loading},
    computed: mapState(['isloading']),
    data() {
      return {
        todoItems: []
      }
    },
    created() {
//      this.$axios.get('/api/getall').then((response) => {
//        console.log("lll~~~ respnse : " + response);
//      }).catch((ex) => {
//        console.log("lll~~~ ex : " + ex);
//      });
      this.$axios.get(CONF.GET_ALL, {params: {pageno: 1}}).then(response => {
        console.log("lll~~~ response 01 : " + response.status);
        console.log("lll~~~ response 01 : " + response.data[0].title);
        console.log("lll~~~ response 01 : " + response.data[1].title);
        console.log("lll~~~ response 01-00 : " + response.data.length);
        console.log("lll~~~ response 01-01 : " + response.data[0].title);
        console.log("lll~~~ response 01-02 : " + response.data.title); // 안 됨
        console.log("lll~~~ response 02 : " + JSON.stringify(response).status); // 안 됨
        let responseDataLength = response.data.length;
        if (responseDataLength > 0) {
          for (var i = 0; i < responseDataLength; i++) {
            this.todoItems.push(response.data[i].title);
          }
        }
      }).catch((ex) => {
        console.log("lll~~~ ex : " + ex);
      });
//      if (localStorage.length > 0) {
//        for (var i = 0; i < localStorage.length; i++) {
//          this.todoItems.push(localStorage.key(i));
//        }
//      }
    },
    methods: {
      clearAll() {
//        localStorage.clear();
        this.$axios.put(CONF.DELETE_ALL).then(response => {
          this.todoItems = [];
        }).catch(ex => {
          console.log("lll~~~ ex : " + ex);
        });
      },
      addTodo(todoItem) { /* 글 쓰기(추가) */
//        localStorage.setItem(todoItem, todoItem);
        this.$axios.post(CONF.POST_ONE, {title: todoItem}).then(response => {
            this.todoItems.push(todoItem);
          }
        ).catch(ex => {
          console.log("lll~~~ ex : " + ex);
        });
      },
      removeTodo(todoItem, index) {
//        localStorage.removeItem(todoItem);
        this.$axios.put(CONF.DELETE_ONE, {title: todoItem}).then(response => {
          this.todoItems.splice(index, 1);
        }).catch(ex => {
          console.log("lll~~~ ex : " + ex);
        })
      }
    },
    components: {
//      'TodoHeader': TodoHeader,
      'TodoInput': TodoInput,
      'TodoList': TodoList,
      'TodoFooter': TodoFooter
    }
  }
</script>
<style>
  #example {
    margin: 10px auto;
    /*max-width: 820px;*/
    /*min-width: 820px;*/
    max-width: auto;
    min-width: auto;
    padding: 0px;
    position: relative;
    font: 13px "verdana";
  }

  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }

  .addContainer {
    /*float: right;*/
    background: linear-gradient(#6478FB, #8763FB);
    display: inline-block;
    /*width: 3rem;*/
    border-radius: 5px 5px 5px 5px;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

</style>
