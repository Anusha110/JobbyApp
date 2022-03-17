import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { BsSearch } from 'react-icons/bs'
import { API_FAILED, API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import JobCard from '../../components/JobCard/JobCard'
import JobsStore from '../../stores/JobsStore/JobsStore'
import Header from '../../components/Header/Header'
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails'
import FailureView from '../../components/FailureView/FailureView'
import UserStore from '../../stores/UserStore/UserStore'
import FiltersGroup from '../../components/FilterGroup/FilterGroup'
import Loader from '../../../Common/components/Loader'
import {
   AllJobDetailsContainer,
   ContentContainer,
   JobCardsAndSearchContainer,
   JobCardsContainer,
   LeftMenuContainer,
   JobsLoadingAndFailureContainer,
   NoJobsFound,
   NoJobsFoundDescription,
   NoJobsFoundHeader,
   ProfileLoadingAndFailureContainer,
   RetryButton,
   SearchButton,
   SearchContainer,
   SearchInput,
   TopMenuContainer
} from './styledComponents'

interface AllJobsDetailsPropsType {
   dummyVar?: null //TODO:
}
interface InjectedProps extends AllJobsDetailsPropsType {
   jobsStore: JobsStore
   userStore: UserStore
}

@inject('jobsStore', 'userStore')
@observer
class AllJobsDetailsRoute extends Component<AllJobsDetailsPropsType> {
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   get jobsStore(): JobsStore {
      return this.getInjectedProps().jobsStore
   }

   get userStore(): UserStore {
      return this.getInjectedProps().userStore
   }

   fetchJobs = () => {
      const { getJobs } = this.jobsStore
      const requestObj = {
         searchInput: '',
         minimumPackage: '',
         employmentType: []
      }

      getJobs(requestObj)
   }

   fetchProfileDetails = () => {
      const { getProfileDetails } = this.userStore
      getProfileDetails(null)
   }

   componentDidMount = () => {
      this.fetchJobs()
      this.fetchProfileDetails()
   }

   filterJobs = () => {
      const requestObj = {
         searchInput: this.jobsStore.searchInput,
         minimumPackage: this.jobsStore.salaryRange,
         employmentType: this.jobsStore.employmentType
      }

      this.jobsStore.getJobs(requestObj)
   }

   onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.jobsStore.changeSearchInput(event)
      this.filterJobs()
   }

   renderNoJobsView = () => (
      <NoJobsFound>
         <img
            src='https://assets.ccbp.in/frontend/react-js/no-jobs-img.png'
            alt='no jobs'
         />
         <NoJobsFoundHeader>No Jobs Found</NoJobsFoundHeader>
         <NoJobsFoundDescription>
            We could not find any jobs. Try other filters.
         </NoJobsFoundDescription>
      </NoJobsFound>
   )

   renderJobsLoadingView = () => (
      <JobsLoadingAndFailureContainer>
         <Loader height={40} width={40} />
      </JobsLoadingAndFailureContainer>
   )

   renderJobsSuccessView = () => {
      const jobs = this.jobsStore.jobsInformation.jobs

      return (
         <JobCardsContainer>
            {jobs.length === 0
               ? this.renderNoJobsView()
               : jobs.map(eachJob => (
                    <JobCard key={eachJob.id} job={eachJob} />
                 ))}
         </JobCardsContainer>
      )
   }

   renderJobsFailureView = () => (
      <JobsLoadingAndFailureContainer>
         <FailureView fetchData={this.fetchJobs} />
      </JobsLoadingAndFailureContainer>
   )

   renderJobsView = () => {
      const { getJobsApiStatus } = this.jobsStore

      switch (getJobsApiStatus) {
         case API_FETCHING:
            return this.renderJobsLoadingView()
         case API_SUCCESS:
            return this.renderJobsSuccessView()
         case API_FAILED:
            return this.renderJobsFailureView()
         default:
            null
      }
   }

   renderProfileLoadingView = () => (
      <ProfileLoadingAndFailureContainer>
         <Loader height={40} width={40} />
      </ProfileLoadingAndFailureContainer>
   )

   renderProfileSuccessView = () => (
      <>
         <ProfileDetails />
      </>
   )

   renderProfileFailureView = () => (
      <ProfileLoadingAndFailureContainer>
         <RetryButton onClick={this.fetchProfileDetails}>Retry</RetryButton>
      </ProfileLoadingAndFailureContainer>
   )

   renderProfile = () => {
      const { getProfileDetailsApiStatus } = this.userStore

      switch (getProfileDetailsApiStatus) {
         case API_FETCHING:
            return this.renderProfileLoadingView()
         case API_SUCCESS:
            return this.renderProfileSuccessView()
         case API_FAILED:
            return this.renderProfileFailureView()
         default:
            null
      }
   }

   render() {
      return (
         <AllJobDetailsContainer>
            <Header />
            <ContentContainer>
               <LeftMenuContainer>
                  {this.renderProfile()}
                  <FiltersGroup filterJobs={this.filterJobs} />
               </LeftMenuContainer>
               <TopMenuContainer>
                  <ProfileDetails />

                  <FiltersGroup filterJobs={this.filterJobs} />
               </TopMenuContainer>
               <JobCardsAndSearchContainer>
                  <SearchContainer>
                     <SearchInput
                        type='search'
                        placeholder='Search'
                        value={this.jobsStore.searchInput}
                        onChange={this.onChangeSearchInput}
                     />
                     <SearchButton type='button' testid='searchButton'>
                        <BsSearch color='white' />
                     </SearchButton>
                  </SearchContainer>

                  {this.renderJobsView()}
               </JobCardsAndSearchContainer>
            </ContentContainer>
         </AllJobDetailsContainer>
      )
   }
}

export default AllJobsDetailsRoute
