export default {
    path : '/admin',
    component : () => import('@/view/Admin'),
    children : [
        {
            path : 'users',
            component : () => import('@/view/Admin/users.vue')
        },
        {
            path : 'movie',
            component : () => import('@/view/Admin/movie.vue')
        },
        {
            path : 'cinema',
            component : () => import('@/view/Admin/cinema.vue')
        },
        {
            path : '/admin',
            redirect : 'users'
        }
    ]
}