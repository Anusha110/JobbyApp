import { create, ApisauceInstance } from 'apisauce'
import { apiMethods } from '../../../Common/constants/APIConstants'
import { BASE_URL } from '../../../Common/constants/URLConstants'

import {
   LoginFailureResponseType,
   LoginRequestType,
   LoginSuccessResponseType
} from '../../stores/types'
import endpoints from '../endpoints'
import AuthService from '.'

// const AUTH_URL = `${Config.NKB_BASE_URL}nkb_auth/`

class AuthServiceApi implements AuthService {
   api: ApisauceInstance
   networkCallWithApisauceWithoutAuth: Promise<any> | any

   constructor(networkCallWithApisauceWithoutAuth: Promise<any> | any) {
      this.api = create({
         baseURL: 'https://apis.ccbp.in/'
      })
      this.networkCallWithApisauceWithoutAuth = networkCallWithApisauceWithoutAuth
   }

   authenticateUser(
      requestObject: LoginRequestType
   ): Promise<LoginSuccessResponseType> {
      return this.networkCallWithApisauceWithoutAuth(
         BASE_URL,
         endpoints.login,
         requestObject,
         apiMethods.post
      )
   }
}

export default AuthServiceApi
