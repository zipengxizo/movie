const state = {
    cityName : window.localStorage.getItem('nowNm') || '北京',
    cityId : window.localStorage.getItem('nowId') || 1
};

const actions = {

};

const mutations = {
    CITY_INFO(state , payload){
        state.cityName = payload.cityName;
        state.cityId = payload.cityId;
    }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}