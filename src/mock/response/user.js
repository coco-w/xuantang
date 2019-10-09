import Mock from 'mockjs'
import jwt from 'jsonwebtoken'

const Random = Mock.Random

export const login = () => {
  const user = {
    name: Random.cname(),
    id: Random.id(),
  }
  let obj = {
    token: jwt.sign(user, 'asd', { expiresIn: '1h' }),
    code: 200
  }
  return Mock.mock(obj) 
}