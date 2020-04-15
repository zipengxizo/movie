
const state = {
    token : window.localStorage.getItem("token"),
    addRoutes:[],
    fullPath : window.localStorage.getItem("fullPath")
};
const mutations = {
    TOKEN(state, payload){
        state.token = payload.token;
    },
    FULLPATH(state,payload){
        state.fullPath = payload.fullPath;
    }
};
const actions = {

}

export default {
    namespaced : true,
    state,
    actions,
    mutations
}