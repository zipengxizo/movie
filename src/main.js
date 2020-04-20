import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import './permisson';
import './utils/commonComponent';
Vue.config.productionTip = false;

//异步加载组件
const Scroller = () => import('@/components/Scroller');
Vue.component('Scroller', Scroller);

/* const Loading = () => import('@/components/Loading');
Vue.component('Loading', Loading);
const Myheader = () => import('@/components/Header');
Vue.component('myheader', Myheader);
const MyTabBar = () => import('@/components/TabBar');
Vue.component('mytabbar', MyTabBar); */

// Vue.prototype.$eventBus = new Vue();

import api from '@/api';
Vue.prototype.$api = api;

Vue.filter('replaceWh', (url, arg) => {
  return url.replace(/w\.h/, arg);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')