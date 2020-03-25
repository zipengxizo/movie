import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import store from './store';


import { Toast } from 'vant';
import 'vant/lib/index.css';
Vue.use(Toast);

import {alert} from '@/components/JS/Alert';
Vue.prototype.$alert = alert;

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
  store,
  render: h => h(App),
}).$mount('#app')
