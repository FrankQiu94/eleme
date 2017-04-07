// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
import axios from 'axios';
import goods from './components/goods/goods';
import seller from './components/seller//seller';
import ratings from './components/ratings/ratings';

// Vue.config.productionTip = false

import './common/stylus/index.styl';

Vue.use(VueRouter);
// Vue.use(VueResource);
// Vue.use(axios);
Vue.prototype.$http = axios

const routes = [
  {
    path: '/',
    redirect: '/goods'
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/seller',
    component: seller
  },
  {
    path: '/ratings',
    component: ratings
  }
];

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
