<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
  import TodoHeader from '../components/TodoHeader.vue';
  import TodoInput from '../components/TodoInput.vue';
  import TodoList from '../components/TodoList.vue';
  import TodoFooter from '../components/TodoFooter.vue';

  import CONF from './Config';


  export default {
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
      this.$axios.get(CONF.GET_ALL).then(response => {
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
      'TodoHeader': TodoHeader,
      'TodoInput': TodoInput,
      'TodoList': TodoList,
      'TodoFooter': TodoFooter
    }
  }
</script>

<style>
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

</style>

