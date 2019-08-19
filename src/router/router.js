import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index.vue')
      },
      {
        path: '/userlogin',
        name: 'UserLogin',
        component: () => import('@/views/UserLogin.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  
]