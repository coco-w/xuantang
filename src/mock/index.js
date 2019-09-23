import Mock from 'mockjs'
import { login } from './response/user'
import { getRegistrationData,browseTheEnrollment,getPaymentStatus } from './response/userAnalysis'
import { getInvitationContent } from './response/homePageSetting'
import { getRegisterFormData } from './response/userPageRegister'

Mock.mock('/api/login', login)
Mock.mock('/api/getRegistrationData', getRegistrationData)
Mock.mock('/api/getBrowseTheEnrollment', browseTheEnrollment)
Mock.mock('/api/getPaymentStatus', getPaymentStatus)
Mock.mock(/\/api\/getInvitationContent/, getInvitationContent)
Mock.mock(/\/api\/getRegisterFormData/, getRegisterFormData)
export default Mock