<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <div class="vertical-container">
      <div class="btn-group">
        <router-link to="/api/home" class="appButton">Home</router-link>
        <router-link to="/about" class="appButton">About</router-link>
        <router-link to="/contacts" class="appButton">Contacts</router-link>
      </div>
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

  .appButton {
    background: linear-gradient(#6478FB, #8763FB);
    color: #fff;
    border: none;
    position: relative;
    height: 60px;
    font-size: 1.6em;
    padding: 0 0.5rem;
    cursor: pointer;
    transition: 800ms ease all;
    outline: none;
    font: 15px "verdana";
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

  .vertical-container {
    height: 50px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
</style>

