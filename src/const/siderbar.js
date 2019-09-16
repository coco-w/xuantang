export const siderbarList = [
  {
    title: '数据仪表盘',
    icon: '#icon-shuju',
    link: 'userAnalysis',
  },
  {
    title: '邀请函设置',
    icon: '#icon-shezhi',
    link: 'homePageSetting'
  },
  {
    title: '报名注册',
    icon: '#icon-zhuce',
    child: [
      {
        title: '报名表设置',
        link: 'invitation',
      },
      {
        title: '嘉宾邀请',
      },
      {
        title: '人员管理',
      }
    ]
  },
  {
    title: '投稿评审',
    icon: '#icon-pingshen',
    child: [
      {
        title: '投稿设置',
      },
      {
        title: '专家管理',
      },
      {
        title: '评审管理',
      },
      {
        title: '稿件管理',
      }
    ]
  },
  {
    title: '交流共享',
    icon: '#icon-IOCN7',
    child: [
      {
        title: '公告动态',
      },
      {
        title: '咨询留言',
      },
      {
        title: '资料共享',
      }
    ]
  },
  {
    title: '通知发布',
    icon: '#icon-tongzhi',
    child: [
      {
        title: '微信通知',
      },
      {
        title: '短信通知',
      },
      {
        title: '邮件通知',
      }
    ]
  },
  {
    title: '签到认证',
    icon: '#icon-qiandao',
    child: [
      {
        title: '现场签到',
      },
    ]
  },
  {
    title: '趣味互动',
    icon: '#icon-hudong',
    child: [
      {
        title: '现场互动',
      },{
        title: '问卷调查',
      },{
        title: '照片分享',
      },
    ]
  },
]