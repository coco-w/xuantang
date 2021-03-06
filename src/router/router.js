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
        component: () => import('@/views/meeting/meetingLogin.vue')
      }
    ]
  },
  {
    path: '/meeting/index',
    name: 'metting',
    component: () => import('@/views/meeting/meetingIndex.vue')
  },
  {
    path: '/meeting',
    name: 'meeting',
    component: () => import('@/views/meeting/meeting.vue'),
    children: [
      {
        path: '/meeting/userAnalysis',
        name: 'userAnalysis',
        component: () => import('@/views/meeting/userAnalysis.vue')
      },
      {
        path: '/meeting/homePageSetting',
        name: 'homePageSetting',
        component: () => import('@/views/meeting/homePageSetting.vue')
      },
      {
        path: '/meeting/beforeMeeting/invitation',
        name: 'invitation',
        component: () => import('@/views/meeting/signUp/invitation.vue')
      },
      {
        path: '/meeting/beforeMeeting/invitation/setUp',
        name: 'setUp',
        component: () => import('@/views/meeting/signUp/setUp.vue')
      },
      {
        path: '/meeting/beforeMeeting/guests',
        name: 'guests',
        component: () => import('@/views/meeting/guests/guests.vue')
      }
    ]
  },
  {
    path: '/user/homePage/index',
    name: 'userHomeIndex',
    component: () => import('@/views/homePage/index.vue'),
    children: [
      {
        path: '/user/homePage/home',
        name: 'userHomePage',
        component: () => import('@/views/homePage/home.vue'),
      },
      {
        path: '/user/homePage/register',
        name: 'userHomeRegister',
        component: () => import('@/views/homePage/register.vue'),
      },
      {
        path: '/user/homePage/contribute',
        name: 'userContribute',
        component: () => import('@/views/homePage/contribute.vue')
      },
      {
        path: '/user/homePage/notice',
        name: 'userContribute',
        component: () => import('@/views/homePage/notice.vue')
      },
      {
        path: '/user/homePage/questionnaire',
        name: 'userContribute',
        component: () => import('@/views/homePage/questionnaire.vue')
      },
      {
        path: '/user/homePage/data',
        name: 'userContribute',
        component: () => import('@/views/homePage/data.vue')
      },
    ]
  }
  
]