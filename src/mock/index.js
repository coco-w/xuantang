import Mock from 'mockjs'
import { login } from './response/user'


Mock.mock('/api/login', login)

export default Mock