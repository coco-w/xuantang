import Mock from 'mockjs'

const Random = Mock.Random

export const getRegistrationData = () => {
  let obj = [
    [Random.natural(100,1000),Random.natural(100,1000)],
    [Random.natural(100,1000),Random.natural(100,1000)],
    [Random.natural(100,1000),Random.natural(100,1000)],
    [Random.natural(100,1000),Random.natural(100,1000)],
  ]
  return Mock.mock(obj) 
}

export const browseTheEnrollment = (data) => {
  // let b = new Date()
  let date = JSON.parse(data.body).date
  let count = (new Date(date[1]).getTime()-new Date(date[0]).getTime())/(1000*60*60*24)
  let obj = {
    time: [],
    browse: [],
    enlist: [],
  }
  for (let i = 0; i < count; i++){
    let time = new Date(new Date(date[0]).getTime() + i*1000*60*60*24)
    let browse = Random.natural(0,100)
    let enlist = Random.natural(0,100)
    obj.time.push(time)
    obj.browse.push(browse)
    obj.enlist.push(enlist)
  }
  return Mock.mock(obj)
}

export const getPaymentStatus = () => {
  let obj = [
    [Random.natural(100,1000),Random.natural(100,1000),Random.natural(100,1000)],
    [Random.natural(100,1000),Random.natural(100,1000)],
    [Random.natural(100,1000),Random.natural(100,1000)],
    [Random.natural(100,1000),Random.natural(100,1000)],
  ]
  return Mock.mock(obj)
}