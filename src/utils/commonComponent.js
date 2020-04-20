import Vue from 'vue';

Vue.component('myheader', {
  props: ['title'],
  template:`<header id="header">
  <slot></slot> <h1>{{ title }}</h1>
  </header>`
});

Vue.component('mytabbar',{
    template:`<footer id="footer">
                <ul>
                    <router-link tag="li" to="/movie">
                        <i class="iconfont icon-dianying"></i>
                        <p>电影</p>
                    </router-link>
                    <router-link tag="li" to="/cinema">
                        <i class="iconfont icon-yingyuan"></i>
                        <p>影院</p>
                    </router-link>
                    <router-link tag="li" to="/mine">
                        <i class="iconfont icon-wode"></i>
                        <p>我的</p>
                    </router-link>
                </ul>
            </footer>`
});

Vue.component('Loading',{
    template:`<div class="loader"></div>`
})