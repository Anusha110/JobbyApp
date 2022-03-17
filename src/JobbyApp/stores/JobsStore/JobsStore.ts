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
import JobsService from '../../services/JobsService'
import {
   FormattedGetJobDetailsResponseType,
   FormattedGetJobsResponseType,
   GetJobDetailsRequestType,
   GetJobDetailsResponseType,
   GetJobsRequestType,
   GetJobsResponseType,
   JobItemDetailsResponseType,
   JobObjectType
} from '../types'
import { setAccessToken } from '../../../Common/utils/StorageUtils'
import JobObjectModel from '../models/JobObjectModel'
import JobDetailsModel from '../models/JobDetailsModel'
import SimilarJobModel from '../models/SimilarJobModel'

class JobsStore {
   jobService: JobsService
   @observable jobsInformation!: FormattedGetJobsResponseType
   @observable getJobsApiStatus!: APIStatus
   @observable getJobsApiError!: string
   @observable employmentType!: string[]
   @observable searchInput!: string
   @observable salaryRange!: string

   @observable jobDetails!: FormattedGetJobDetailsResponseType
   @observable getJobDetailsApiStatus!: APIStatus
   @observable getJobDetailsApiError!: string

   constructor(service: JobsService) {
      this.jobService = service
      this.init()
   }

   @action.bound
   init(): void {
      this.getJobsApiStatus = API_INITIAL
      this.getJobsApiError = ''
      this.getJobDetailsApiStatus = API_INITIAL
      this.getJobDetailsApiError = ''

      this.jobDetails = {
         jobDetails: {
            companyLogoUrl: '',
            employmentType: '',
            id: '',
            jobDescription: '',
            location: '',
            packagePerAnnum: '',
            rating: 0,
            title: '',
            companyWebsiteUrl: '',
            skills: [],
            lifeAtCompany: {
               description: '',
               imageUrl: ''
            }
         },
         similarJobs: []
      }
      this.jobsInformation = { jobs: [], total: 0 }
      this.employmentType = []
      this.searchInput = ''
      this.salaryRange = ''
   }

   @action.bound
   clearStore(): void {
      this.init()
   }

   @action.bound
   setGetJobsApiStatus(status: APIStatus): void {
      this.getJobsApiStatus = status
   }

   @action.bound
   setGetJobsApiError(error: string): void {
      this.getJobsApiError = error
   }

   @action.bound
   changeEmploymentType(value: string): void {
      if (this.employmentType.includes(value)) {
         this.employmentType = this.employmentType.filter(item => item != value)
      } else {
         this.employmentType.push(value)
      }
   }

   @action.bound
   changeSearchInput(event: React.ChangeEvent<HTMLInputElement>): void {
      console.log('changeSearchInput called')
      this.searchInput = event.target.value
   }

   @action.bound
   changeSalaryRange(event: React.ChangeEvent<HTMLInputElement>): void {
      this.salaryRange = event.target.value
   }

   @action.bound
   setGetJobsApiResponse(response: GetJobsResponseType | null): void {
      if (response) {
         this.jobsInformation.jobs = []
         response.jobs.map(eachJob => {
            const newJobModel = new JobObjectModel(eachJob)
            this.jobsInformation.jobs.push(newJobModel)
         })
         this.jobsInformation.total = response.total
      }
   }

   getJobs = async (
      requestObj: GetJobsRequestType,
      onSubmitSuccess = (): void | null => null,
      onSubmitFailure = () => null
   ) => {
      this.setGetJobsApiStatus(API_FETCHING)
      const getJobsResponse: any = await this.jobService.getJobs(requestObj)
      const jsonData = await getJobsResponse.json()
      if (getJobsResponse.ok) {
         this.setGetJobsApiResponse(jsonData)
         this.setGetJobsApiStatus(API_SUCCESS)
         onSubmitSuccess()
      } else {
         this.setGetJobsApiStatus(API_FAILED)
         this.setGetJobsApiError(jsonData.error_msg)
      }
   }

   @action.bound
   setGetJobDetailsApiStatus(status: APIStatus): void {
      this.getJobDetailsApiStatus = status
   }

   @action.bound
   setGetJobDetailsApiError(error: string): void {
      this.getJobDetailsApiError = error
   }

   @action.bound
   setGetJobDetailsApiResponse(
      response: GetJobDetailsResponseType | null
   ): void {
      if (response) {
         this.jobDetails.jobDetails = new JobDetailsModel(response.job_details)
         this.jobDetails.similarJobs = response.similar_jobs.map(
            eachJob => new SimilarJobModel(eachJob)
         )
      }
   }

   getJobDetails = async (
      requestObj: GetJobDetailsRequestType,
      onSubmitSuccess = (): void | null => null,
      onSubmitFailure = () => null
   ) => {
      this.setGetJobDetailsApiStatus(API_FETCHING)
      const getJobDetailsResponse: any = await this.jobService.getJobDetails(
         requestObj
      )
      const jsonData = await getJobDetailsResponse.json()
      if (getJobDetailsResponse.ok) {
         this.setGetJobDetailsApiResponse(jsonData)
         this.setGetJobDetailsApiStatus(API_SUCCESS)
         onSubmitSuccess()
      } else {
         this.setGetJobDetailsApiStatus(API_FAILED)
         this.setGetJobDetailsApiError(jsonData.error_msg)
      }
   }
}

export default JobsStore

// const getJobsPromise = this.jobService.getJobs(requestObj)

// return bindPromiseWithOnSuccess(getJobsPromise)
//    .to(this.setGetJobsApiStatus, response => {
//       this.setGetJobsApiResponse(response)
//    })
//    .catch(this.setGetJobsApiError)
