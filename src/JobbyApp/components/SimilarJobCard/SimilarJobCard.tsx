import { observer } from 'mobx-react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdLocationOn, MdWork } from 'react-icons/md'

import { Link } from 'react-router-dom'
import {
   FormattedJobObjectType,
   FormattedSimilarJobType
} from '../../stores/types'
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
   JobTitle,
   JobTitleAndRatingContainer,
   LocationIcon,
   Rating,
   RatingContainer,
   WorkIcon
} from './styledComponents'

interface JobCardType {
   job: FormattedSimilarJobType
}

const SimilarJobCard = observer((props: JobCardType) => {
   const { job } = props
   const {
      companyLogoUrl,
      employmentType,
      id,
      jobDescription,
      location,
      title,
      rating
   } = job

   return (
      <JobCardContainer>
         <JobCardHeader>
            <CompanyLogo src={companyLogoUrl} alt='company logo' />
            <JobTitleAndRatingContainer>
               <JobTitle>{title}</JobTitle>
               <RatingContainer>
                  <AiFillStar color='#fbbf24' size='25'></AiFillStar>
                  <Rating>{rating}</Rating>
               </RatingContainer>
            </JobTitleAndRatingContainer>
         </JobCardHeader>
         <Description>
            <DescriptionHeader>Description</DescriptionHeader>
            <DescriptionText>{jobDescription}</DescriptionText>
         </Description>
         <JobCardExtraDetailsContainer>
            <JobLocationAndEmploymentType>
               <JobDetails>
                  <LocationIcon size='25' />
                  <p>{location}</p>
               </JobDetails>
               <JobDetails>
                  <WorkIcon size='25' />
                  <p>{employmentType}</p>
               </JobDetails>
            </JobLocationAndEmploymentType>
         </JobCardExtraDetailsContainer>
      </JobCardContainer>
   )
})

export default SimilarJobCard
