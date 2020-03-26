import Vue from 'vue'
import Router from 'vue-router'
import cinemaRouter from './cinema'
import mineRouter from './mine'
import movieRouter from './movies'
import adminRouter from './admin'
Vue.use(Router);

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
        movieRouter,
        cinemaRouter,
        mineRouter,
        adminRouter,
        {
            path:'/',
            redirect:'/movie'
        }
    ]
})
