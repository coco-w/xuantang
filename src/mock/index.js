import Mock from 'mockjs'
import { login } from './response/user'
import { getRegistrationData,browseTheEnrollment,getPaymentStatus } from './response/userAnalysis'
import { getInvitationContent } from './response/homePageSetting'
import { getRegisterFormData } from './response/userPageRegister'
import {getMeetingList, meetingChangeSearch, getMeetingContent, updateContent, deleteContent} from './response/meetingIndex'


Mock.mock('/api/login', login)
Mock.mock('/api/getRegistrationData', getRegistrationData)
Mock.mock('/api/getBrowseTheEnrollment', browseTheEnrollment)
Mock.mock('/api/getPaymentStatus', getPaymentStatus)
Mock.mock(/\/api\/getInvitationContent/, getInvitationContent)
Mock.mock(/\/api\/getRegisterFormData/, getRegisterFormData)
Mock.mock(/\/api\/getMeetingList/, getMeetingList)
Mock.mock(/\/api\/meetingChangeSearch/, meetingChangeSearch)
Mock.mock(/\/api\/getMeetingContent/, getMeetingContent)
Mock.mock(/\/api\/updateContent/, updateContent)
Mock.mock(/\/api\/deleteContent/, deleteContent)
export default Mock