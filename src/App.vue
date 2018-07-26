<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <div class="btn-group">
      <router-link to="/api/home" class="addContainer addBtn">Home</router-link>
      <router-link to="/about" class="addContainer addBtn">About</router-link>
      <router-link to="/contacts" class="addContainer addBtn">Contacts</router-link>
    </div>
    <!--<transition name="flip" mode="out-in">-->
    <router-view></router-view>
    <!--</transition>-->
  </div>
</template>

<script>

  import TodoHeader from './components/about/TodoHeader.vue';

//  import Loading from './components/Loading.vue';
  import {mapState} from 'vuex';

  export default {
    name: 'app',
//    components: {Loading},
//    computed: mapState(['isloading']),
    components: {
      'TodoHeader': TodoHeader
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

