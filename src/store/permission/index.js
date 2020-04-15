import {
  asyncRouterMap
} from '@/router/admin';
import cinemaRouter from '@/router/cinema';
import mineRouter from '@/router/mine';
import movieRouter from '@/router/movies';

let constantRouterMap = [cinemaRouter, mineRouter, movieRouter];

function hasPermission(roles, route) {
  try {
    if (route.meta && route.meta.role) {
      return roles.some(role => route.meta.role.indexOf(role) >= 0)
    } else {
      return true
    }
  } catch (error) {
    console.log(error)
  }
}

const permission = {
  namespaced: true,
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  actions: {
    generateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        const {
          roles
        } = data;
        const accessedRouters = asyncRouterMap.filter(v => {
          if (roles.indexOf('admin') >= 0) return true;
          if (hasPermission(roles, v)) {
            if (v.children && v.children.length > 0) {
              v.children = v.children.filter(child => {
                if (hasPermission(roles, child)) {
                  return child
                }
                return false;
              });
              return v
            } else {
              return v
            }
          }
          return false;
        });
        commit('SET_ROUTERS', accessedRouters);
        resolve(accessedRouters);
      })
    }
  }
};

export default permission;