import {
   APIStatus,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '@ib/api-constants'
import { observable, action } from 'mobx'
import React from 'react'
import { bindPromiseWithOnSuccess } from '../../../Common/utils/MobxPromise'
import {
   FormattedUserProfileType,
   GetProfileDetailsResponseType
} from '../types'
import { setAccessToken } from '../../../Common/utils/StorageUtils'
import UserProfileModel from '../models/UserProfileModel'
import UserService from '../../services/UserService'

class UserStore {
   userService: UserService
   @observable profileDetails!: FormattedUserProfileType | null
   @observable getProfileDetailsApiStatus!: APIStatus
   @observable getProfileDetailsApiError!: string

   constructor(service: UserService) {
      this.userService = service
      this.init()
   }

   @action.bound
   init(): void {
      this.profileDetails = null
      this.getProfileDetailsApiStatus = API_INITIAL
      this.getProfileDetailsApiError = ''
   }

   @action.bound
   clearStore(): void {
      this.init()
   }

   @action.bound
   setGetProfileDetailsApiStatus(status: APIStatus): void {
      this.getProfileDetailsApiStatus = status
   }

   @action.bound
   setGetProfileDetailsApiError(error: string): void {
      this.getProfileDetailsApiError = error
   }

   @action.bound
   setGetProfileDetailsApiResponse(
      response: GetProfileDetailsResponseType | null
   ): void {
      if (response) {
         this.profileDetails = new UserProfileModel(response.profile_details)
         console.log(this.profileDetails, 'prof details')
      }
   }

   getProfileDetails = async (
      requestObj: null,
      onSubmitSuccess = (): void | null => null,
      onSubmitFailure = () => null
   ) => {
      this.setGetProfileDetailsApiStatus(API_FETCHING)
      const getProfileDetailsResponse: any = await this.userService.getProfileDetails()
      const jsonData = await getProfileDetailsResponse.json()
      if (getProfileDetailsResponse.ok) {
         this.setGetProfileDetailsApiResponse(jsonData)
         this.setGetProfileDetailsApiStatus(API_SUCCESS)
         onSubmitSuccess()
      } else {
         this.setGetProfileDetailsApiStatus(API_FAILED)
         this.setGetProfileDetailsApiError(jsonData.error_msg)
      }
   }
}

export default UserStore

// const getJobsPromise = this.userService.getProfileDetails()
//       return bindPromiseWithOnSuccess(getJobsPromise)
//          .to(this.setGetProfileDetailsApiStatus, response => {
//             this.setGetProfileDetailsApiResponse(response)
//          })
//          .catch(this.setGetProfileDetailsApiError)
