import Vue from 'vue'
import router from './router/index'
import App from './App.vue'


import Loading from '@/components/Loading'
Vue.component('Loading',Loading);
Vue.config.productionTip = false;

import Scroller from '@/components/Scroller'
Vue.component('Scroller',Scroller);

import api from '@/api';
Vue.prototype.$api = api;

Vue.filter('replaceWh',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
