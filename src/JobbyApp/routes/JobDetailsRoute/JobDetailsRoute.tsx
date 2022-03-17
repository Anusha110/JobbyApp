import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { match } from 'react-router-dom' //eslint-disable-line
import { AiFillStar } from 'react-icons/ai'
import { BiLinkExternal } from 'react-icons/bi'
import uuid from 'uuid'
import { API_FAILED, API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import JobsStore from '../../stores/JobsStore/JobsStore'
import Header from '../../components/Header/Header'

import SimilarJobCard from '../../components/SimilarJobCard/SimilarJobCard'
import Loader from '../../../Common/components/Loader'
import FailureView from '../../components/FailureView/FailureView'
import {
   CompanyLogo,
   Description,
   DescriptionHeader,
   DescriptionText,
   JobCardContainer,
   JobCardExtraDetailsContainer,
   JobCardHeader,
   JobDetails,
   JobLocationAndEmploymentType,
   JobPackage,
   JobTitle,
   JobTitleAndRatingContainer,
   LocationIcon,
   Rating,
   RatingContainer,
   GrayLine,
   WorkIcon,
   JobDetailsPageContainer,
   LifeAtCompanyContainer,
   LifeAtCompanyImage,
   LifeAtCompanyHeader,
   LifeAtCompanyDescription,
   LifeAtCompanySection,
   Skill,
   SkillImage,
   SkillName,
   SkillsContainer,
   SkillsHeader,
   Skills,
   VisitText,
   VisitContainer,
   DescriptionHeaderContainer,
   SimilarJobsHeader,
   SimilarJobsContainer,
   SimilarJobsCards,
   JobDetailsContainer,
   FailureAndLoadingContainer
} from './styledComponents'

interface GetJobsDetailsParamsType {
   id: string
}

interface JobsDetailsPropsType {
   match: match<GetJobsDetailsParamsType>
}

interface InjectedProps extends JobsDetailsPropsType {
   jobsStore: JobsStore
}

@inject('jobsStore')
@observer
class JobsDetailsRoute extends Component<JobsDetailsPropsType> {
   getInjectedProps = (): InjectedProps => this.props as InjectedProps

   get jobsStore(): JobsStore {
      return this.getInjectedProps().jobsStore
   }

   fetchJobDetails = () => {
      const { match } = this.props
      const { params } = match
      const { id } = params
      const requestObj = {
         id: id
      }

      this.jobsStore.getJobDetails(requestObj)
   }

   componentDidMount = () => {
      this.fetchJobDetails()
   }

   renderNoJobsView = () => <h1>No Jobs Found</h1>

   renderLoadingView = () => (
      <FailureAndLoadingContainer>
         <Loader height={40} width={40} />
      </FailureAndLoadingContainer>
   )

   renderSuccessView = () => {
      const { jobDetails, similarJobs } = this.jobsStore.jobDetails
      return (
         <JobDetailsContainer>
            <JobCardContainer>
               <JobCardHeader>
                  <CompanyLogo
                     src={jobDetails.companyLogoUrl}
                     alt='company logo'
                  />
                  <JobTitleAndRatingContainer>
                     <JobTitle>{jobDetails.title}</JobTitle>
                     <RatingContainer>
                        <AiFillStar color='#fbbf24' size='25'></AiFillStar>
                        <Rating>{jobDetails.rating}</Rating>
                     </RatingContainer>
                  </JobTitleAndRatingContainer>
               </JobCardHeader>
               <JobCardExtraDetailsContainer>
                  <JobLocationAndEmploymentType>
                     <JobDetails>
                        <LocationIcon size='25' />
                        <p>{jobDetails.location}</p>
                     </JobDetails>
                     <JobDetails>
                        <WorkIcon size='25' />
                        <p>{jobDetails.employmentType}</p>
                     </JobDetails>
                  </JobLocationAndEmploymentType>
                  <JobPackage>{jobDetails.packagePerAnnum}</JobPackage>
               </JobCardExtraDetailsContainer>
               <Description>
                  <GrayLine />
                  <DescriptionHeaderContainer>
                     <DescriptionHeader>Description</DescriptionHeader>
                     <VisitContainer href={jobDetails.companyWebsiteUrl}>
                        <VisitText>Visit</VisitText>
                        <BiLinkExternal size='20' color='#b6c5ff' />
                     </VisitContainer>
                  </DescriptionHeaderContainer>
                  <DescriptionText>{jobDetails.jobDescription}</DescriptionText>
               </Description>
               <SkillsContainer>
                  <SkillsHeader>Skills</SkillsHeader>
                  <Skills>
                     {jobDetails.skills.map(eachSkill => (
                        <Skill key={uuid()}>
                           <SkillImage src={eachSkill.imageUrl} />
                           <SkillName>{eachSkill.name}</SkillName>
                        </Skill>
                     ))}
                  </Skills>
               </SkillsContainer>
               <LifeAtCompanyContainer>
                  <LifeAtCompanyHeader>Life at Company</LifeAtCompanyHeader>
                  <LifeAtCompanySection>
                     <LifeAtCompanyDescription>
                        {jobDetails.lifeAtCompany.description}
                     </LifeAtCompanyDescription>
                     <LifeAtCompanyImage
                        src={jobDetails.lifeAtCompany.imageUrl}
                     />
                  </LifeAtCompanySection>
               </LifeAtCompanyContainer>
            </JobCardContainer>
            <SimilarJobsContainer>
               <SimilarJobsHeader>Similar Jobs</SimilarJobsHeader>
               <SimilarJobsCards>
                  {similarJobs.map(eachJob => (
                     <SimilarJobCard key={eachJob.id} job={eachJob} />
                  ))}
               </SimilarJobsCards>
            </SimilarJobsContainer>
         </JobDetailsContainer>
      )
   }

   renderFailureView = () => (
      <FailureAndLoadingContainer>
         <FailureView fetchData={this.fetchJobDetails} />
      </FailureAndLoadingContainer>
   )

   renderJobDetailsView = () => {
      const { getJobDetailsApiStatus } = this.jobsStore

      switch (getJobDetailsApiStatus) {
         case API_FETCHING:
            return this.renderLoadingView()
         case API_SUCCESS:
            return this.renderSuccessView()
         case API_FAILED:
            return this.renderFailureView()
         default:
            null
      }
   }

   render() {
      return (
         <JobDetailsPageContainer>
            <Header />
            {this.renderJobDetailsView()}
         </JobDetailsPageContainer>
      )
   }
}

export default JobsDetailsRoute
