import Mock from 'mockjs'
import { login } from './response/user'
import { getRegistrationData,browseTheEnrollment,getPaymentStatus } from './response/userAnalysis'
import { getInvitationContent } from './response/homePageSetting'


Mock.mock('/api/login', login)
Mock.mock('/api/getRegistrationData', getRegistrationData)
Mock.mock('/api/getBrowseTheEnrollment', browseTheEnrollment)
Mock.mock('/api/getPaymentStatus', getPaymentStatus)
Mock.mock(/\/api\/getInvitationContent/, getInvitationContent)

export default Mock