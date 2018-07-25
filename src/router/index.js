import Vue from 'vue'
import Vuex from 'vuex';
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import state from '../store/state';
import mutations from '../store/mutations';
import actions from '../store/actions';
import ES6Promise from 'es6-promise'

ES6Promise.polyfill();
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store;
