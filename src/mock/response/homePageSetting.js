import Mock from 'mockjs'

const Random = Mock.Random

export const getInvitationContent = () => {
  let temp2 = []
  for (let i = 0; i < Random.natural(3,8); i++) {
    let b = Random.cword(3,6)
    let a = {
      sort: b,
      content: b,
    }
    temp2.push(a)
  }
  let obj = {
    title : Random.cword(4, 10),
    time: '2018年11月10日-11日',
    address: Random.county(true),
    img: Random.dataImage('100x100','#FF0000'),
    data: temp2,
  }
  return Mock.mock(obj) 
}