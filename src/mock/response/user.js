import Mock from 'mockjs'

const Random = Mock.Random

export const login = () => {
  let obj = {
    name: Random.cname(),
    id: Random.id(),
    code: 200
  }
  return Mock.mock(obj) 
}