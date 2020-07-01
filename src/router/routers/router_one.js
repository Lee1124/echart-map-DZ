import Layout from '@/layout/index'
export default [
    // {
    //     path: '/404',
    //     component: () => import('@/views/features/404'),
    //     hidden: true
    // },
    // {
    //     path: '/401',
    //     component: () => import('@/views/features/401'),
    //     hidden: true
    // },
    {
        path: '/',
        hidden: false,
        meta: { title: 'demo' },
        component: () => import('@/views/login')
    },
]