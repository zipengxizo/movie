
const state = {
    token : window.localStorage.getItem("token")
};
const mutations = {
    TOKEN(state, payload){
        state.token = payload.token;
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