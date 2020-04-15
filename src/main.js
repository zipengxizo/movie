import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import './permisson';
Vue.config.productionTip = false;

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);

import api from '@/api';
Vue.prototype.$api = api;

Vue.filter('replaceWh',(url,arg)=>{
  return url.replace(/w\.h/,arg);
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
