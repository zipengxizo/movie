import router from './router'
import store from './store'


const whiteList = ['/mine/login','/movie/nowPlaying','/movie/nowPlaying',
'/movie/comingSoon','/movie/city','/movie/search','/movie/detail/:movieId','/cinema'
,'/mine/register','/mine/findPassword'];
router.beforeEach(async(to, from, next) => {

  // determine whether the user has logged in
  const hasToken = window.localStorage.getItem('token');

  if (hasToken) {
    if (to.path === '/mine/login') {
      next({ path: '/mine/login' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      const hasRoles = store.getters.roles && store.getters.roles.length > 0;
      if (hasRoles) {
        next()
      } else {
        try {
          // get user info
          // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
          const { roles } = await store.dispatch('user/getInfo');

          // generate accessible routes map based on roles
          const accessRoutes = await store.dispatch('permission/generateRoutes', {roles:roles});
          // dynamically add accessible routes
          router.addRoutes(accessRoutes);
          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
        //   await store.dispatch('user/resetToken')
          next(`/mine/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/mine/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
})