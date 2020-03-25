import base from './base';
import axios from '@/utils/http';

/**
 * cinema模块接口列表
 */

const cinema = {    
    // 影院列表    
    cinemaList () {        
        return axios.get(`${base.api1}/cinemaList`);    
    }
}

export default cinema;