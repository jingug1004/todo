// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store/index'

import axios from 'axios'

import VueRouter from 'vue-router';

import HelloWorld from '@/components/HelloWorld'

import Home from './components/contacts/Home';
import About from './components/contacts/About';
import ContactList from './components/contacts/ContactList';
import TodoInputForm from './components/about/TodoInputForm';
import TodoLoadBoards from './components/about/TodoLoadBoards.vue';
// import Scroller from './components/about/Scroller.vue';
import UpdatePhoto from './components/contacts/UpdatePhoto';

Vue.use(VueRouter);
// Vue.prototype.$axios = axios;
// Vue.prototype.$store = store;
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/api/home', name: 'home', component: Home},
    {path: '/about', name: 'about', component: About, children: [
      {path: 'add', name: 'addproject', component: TodoInputForm},
      {path: 'load/:no', name: 'loadboards', component:TodoLoadBoards, props:true}
      // {path: 'load', name: 'scroller', component:Scroller, props:true}
      ]},
    {path: '/contacts', name: 'contacts', component: ContactList, children: [
      // {path: 'add', name: 'addcontact1', component: ContactForm},
      // {path: 'update/:no', name: 'updatecontact', component: ContactForm, props: true},
      {path: 'photo/:no', name: 'updatephoto', component: UpdatePhoto, props: true}
    ]},
  ]
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
