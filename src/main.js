import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import './permisson';
Vue.config.productionTip = false;

//异步加载组件
const Loading = ()=> import('@/components/Loading');
Vue.component('Loading',Loading);

const Scroller = ()=> import('@/components/Scroller');
Vue.component('Scroller',Scroller);

// Vue.prototype.$eventBus = new Vue();

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
