import { create, ApisauceInstance } from 'apisauce'
import { apiMethods } from '../../../Common/constants/APIConstants'
import Config from '../../../Common/constants/EnvironmentConstants'
import {
   GetJobDetailsRequestType,
   GetJobDetailsResponseType,
   GetJobsRequestType,
   GetJobsResponseType
} from '../../stores/types'
import { BASE_URL } from '../../../Common/constants/URLConstants'

import endpoints from '../endpoints'
import JobsService from '.'

// const AUTH_URL = `${Config.NKB_BASE_URL}nkb_auth/`

class JobsServiceApi implements JobsService {
   api: ApisauceInstance
   networkCallWithApisauce: Promise<any> | any

   constructor(networkCallWithApisauce: Promise<any> | any) {
      this.api = create({
         baseURL: 'https://apis.ccbp.in/'
      })
      this.networkCallWithApisauce = networkCallWithApisauce
   }

   getJobs(requestObject: GetJobsRequestType): Promise<GetJobsResponseType> {
      const queryParameters = `?employment_type=${requestObject.employmentType.join(
         ','
      )}&minimum_package=${requestObject.minimumPackage}&search=${
         requestObject.searchInput
      }
`
      return this.networkCallWithApisauce(
         BASE_URL,
         endpoints.jobs + queryParameters,
         {},
         apiMethods.get
      )
   }

   getJobDetails(
      requestObject: GetJobDetailsRequestType
   ): Promise<GetJobDetailsResponseType> {
      return this.networkCallWithApisauce(
         'https://apis.ccbp.in/',
         `${endpoints.jobs}/${requestObject.id}`,
         {},
         apiMethods.get
      )
   }
}

export default JobsServiceApi
