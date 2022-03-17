// import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {
   APIStatus,
   API_FAILED,
   API_INITIAL,
   API_SUCCESS
} from '@ib/api-constants'
import { observable, action } from 'mobx'
import { bindPromiseWithOnSuccess } from '../../../Common/utils/MobxPromise'
import AuthService from '../../services/AuthService'
import {
   isLoginSuccess,
   LoginFailureResponseType,
   LoginRequestType,
   LoginSuccessResponseType
} from '../types'
import { setAccessToken } from '../../../Common/utils/StorageUtils'

class AuthStore {
   @observable authenticateUserApiStatus!: APIStatus
   @observable authenticateUserApiError!: string
   authService: AuthService

   constructor(service: AuthService) {
      this.authService = service
      this.init()
   }

   @action.bound
   init(): void {
      this.authenticateUserApiStatus = API_INITIAL
      this.authenticateUserApiError = ''
   }

   @action.bound
   clearStore(): void {
      console.log('clear store')
      this.init()
   }

   @action.bound
   setAuthenticateUserApiStatus(status: APIStatus): void {
      this.authenticateUserApiStatus = status
   }

   @action.bound
   setAuthenticateUserApiResponse(
      response: LoginSuccessResponseType | null
   ): void {
      if (response) {
         setAccessToken(response.jwt_token)
      }
   }

   @action.bound
   setAuthenticateUserApiError(error: string): void {
      this.authenticateUserApiError = error
   }

   authenticateUser = async (
      requestObj: LoginRequestType,
      onSubmitSuccess = (): void | null => null,
      onSubmitFailure = () => null
   ): Promise<any> => {
      const authenticateUserResponse: any = await this.authService.authenticateUser(
         requestObj
      )
      const jsonData = await authenticateUserResponse.json()
      if (authenticateUserResponse.ok) {
         this.setAuthenticateUserApiResponse(jsonData)
         this.setAuthenticateUserApiStatus(API_SUCCESS)
         onSubmitSuccess()
      } else {
         this.setAuthenticateUserApiStatus(API_FAILED)
         this.setAuthenticateUserApiError(jsonData.error_msg)
      }
   }
}

export default AuthStore

// authenticateUser = (
//    requestObj: LoginRequestType,
//    onSubmitSuccess = (): void | null => null,
//    onSubmitFailure = () => null
// ) => {
//    const authenticateUserPromise = this.authService.authenticateUser(
//       requestObj
//    )
//    console.log('authenticateUserPromise', authenticateUserPromise)
//    return bindPromiseWithOnSuccess(authenticateUserPromise)
//       .to(this.setAuthenticateUserApiStatus, response => {
//          console.log('came into success')
//          this.setAuthenticateUserApiResponse(response)
//          onSubmitSuccess()
//       })
//       .catch(this.setAuthenticateUserApiError)
// }
