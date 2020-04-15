import users from '@/api/users';

const state = {
    name : window.localStorage.getItem('username') || '',
    isAdmin : window.localStorage.getItem('isAdmin') ||  false,
    userHead : '',
    roles: [],
};

const actions = {
    // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      users.getUser(state.token).then(response => {
        const { data } = response.data;

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        let { roles} = data
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }
        commit('SET_ROLES', roles);
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

};

const mutations = {
    USER_NAME(state , payload){
        state.name = payload.name;
        state.isAdmin = payload.isAdmin;
        state.userHead = payload.userHead;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}