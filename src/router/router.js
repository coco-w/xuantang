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
      },
      {
        path: '/meetinglogin',
        name: 'meetinglogin',
        component: () => import('@/views/meetingLogin.vue')
      }
    ]
  },
  {
    path: '/meeting/index',
    name: 'metting',
    component: () => import('@/views/meetingIndex.vue')
  },
  {
    path: '/userAnalysis',
    name: 'userAnalysis',
    component: () => import('@/views/userAnalysis.vue')
  }
  
]