import base from './base';
import axios from '@/utils/http';

/**
 * movie模块接口列表
 */

const movie = {    
    // 正在热映    
    movieOnList (cityId) {        
        return axios.get(`${base.api1}/movieOnInfoList`,{
            cityId : cityId
        });    
    },    
    // 即将上映    
    movieComingList (cityId) {
        return axios.get(`${base.api1}/movieComingList`,{
            cityId : cityId
        });    
    },        
    // 电影详情 
    movieDetail (movieId) {        
        return axios.get(`${base.api1}/detailmovie`, {            
            movieId: movieId        
        });    
    },
}

export default movie;