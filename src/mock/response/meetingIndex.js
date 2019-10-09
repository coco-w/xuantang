import Mock from 'mockjs'

const Random = Mock.Random

// 获取会议信息
export const getMeetingList = () => {
  let arr = []
  for (let i = 0; i < Random.natural(2,5); i++) {
    let a = Number(Random.datetime('T'))
    let b = Number(Random.datetime('T'))
    let c = []
    if (a - b > 0) {
      c = [b,a]
    }else {
      c= [a,b]
    }
    let item = {
      //会议标题
      title: Random.cword(4, 10),
      //会议地址
      address: Random.county(true),
      //会议logo
      logo: Random.dataImage('100x100','#FF0000'),
      //会议时间
      date: c,
      // id
      id: Random.id(),
      // 是否可以被搜索
      search: true,
      // 封面是否显示会议信息
      showInfo: true,
      // 是否显示侧边栏，
      layerShow: true,
      // 内容id
      contentId: Random.id()

    }
    arr.push(item)
  }
  return Mock.mock(arr)
}
// 修改 会议是否被搜索
export const meetingChangeSearch = id => {

  return Mock.mock({code : 200})
}


export const getMeetingContent = id => {
  let temp2 = []
  for (let i = 0; i < Random.natural(3,8); i++) {
    let b = Random.cword(3,6)
    let a = {
      // 小节标题
      sort: b,
      // 小节内容
      content: b,
    }
    temp2.push(a)
  }
  return Mock.mock(temp2)
}

export const updateContent = params => {
  return Mock.mock({code: 200})
}

export const deleteContent = prarms => {
  return Mock.mock({code: 200})
}