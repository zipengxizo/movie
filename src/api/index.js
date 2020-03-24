/** 
 * api接口的统一出口
 */
// 影院模块接口
import cinema from '@/api/cinema';
//电影模块接口
import movie from '@/api/movie';
//城市模块接口
import city from '@/api/city';


// 导出接口
export default {    
    cinema,
    movie,
    city
}