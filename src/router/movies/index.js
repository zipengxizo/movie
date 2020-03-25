

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
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ]
}