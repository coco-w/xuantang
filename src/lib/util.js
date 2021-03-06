import Cookie from 'js-cookie'
import jwt from 'jsonwebtoken'

export const getToken = () => {
  return Cookie.get('token')
}

export const setToken = (data) => {
  console.log(data)
  Cookie.set('token', data)
}

export const getUserInfo = () => {
  return Cookie.get('user')
}

export const setUserInfo = (data) => {
  console.log(data)
  Cookie.set('user', data)
}

export const parsingToken = () => {
  let token = getToken()
  return jwt.verify(token, 'asd', (err, doc) => {
    if (err) {
      console.log(err)
    }
    return doc
  })
}