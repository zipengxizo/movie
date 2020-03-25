

export default {
    path:'/movie',
    component:() => import('@/view/Movies'),
    children:[
        {
            path:'nowPlaying',
            component:()=>import('@/components/NowPlaying')
        },
        {
            path:'comingSoon',
            component:()=>import('@/components/ComingSoon')
        },
        {
            path : 'city',
            component:()=>import('@/components/City')
        },
        {
            path : 'search',
            component:()=>import('@/components/Search')
        },
        {
            path : 'detail/:movieId',
            components : {
                default : ()=> import('@/components/NowPlaying'),
                detail : ()=> import('@/view/Movies/detail')
            },
            props : {
                detail : true
            }
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}