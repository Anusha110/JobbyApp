import { create, ApisauceInstance } from 'apisauce'
import { apiMethods } from '../../../Common/constants/APIConstants'
import Config from '../../../Common/constants/EnvironmentConstants'
import { GetProfileDetailsResponseType } from '../../stores/types'
import endpoints from '../endpoints'
import { BASE_URL } from '../../../Common/constants/URLConstants'
import UserService from '.'

// const AUTH_URL = `${Config.NKB_BASE_URL}nkb_auth/`

class UserServiceApi implements UserService {
   api: ApisauceInstance
   networkCallWithApisauce: Promise<any> | any

   constructor(networkCallWithApisauce: Promise<any> | any) {
      this.api = create({
         baseURL: 'https://apis.ccbp.in/'
      })
      this.networkCallWithApisauce = networkCallWithApisauce
   }

   getProfileDetails(): Promise<GetProfileDetailsResponseType> {
      return this.networkCallWithApisauce(
         BASE_URL,
         endpoints.profile,
         {},
         apiMethods.get
      )
   }
}

export default UserServiceApi
