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
import ContactForm from './components/contacts/ContactForm';
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
    {path: '/about', name: 'about', component: About},
    {
      path: '/contacts', name: 'contacts', component: ContactList, children: [
      {path: 'add', name: 'addcontact', component: ContactForm},
      {path: 'update/:no', name: 'updatecontact', component: ContactForm, props: true},
      {path: 'photo/:no', name: 'updatephoto', component: UpdatePhoto, props: true}
    ]
    },
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
