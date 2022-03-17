import { observer } from 'mobx-react'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { MdLocationOn, MdWork } from 'react-icons/md'

import { Link } from 'react-router-dom'
import { FormattedJobObjectType } from '../../stores/types'
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
   WorkIcon
} from './styledComponents'

interface JobCardType {
   job: FormattedJobObjectType
}

const JobCard = observer((props: JobCardType) => {
   const { job } = props
   const {
      companyLogoUrl,
      employmentType,
      id,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      title
   } = job
   const path = `jobs/${id}`

   return (
      <Link to={path}>
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
               <JobPackage>{packagePerAnnum}</JobPackage>
            </JobCardExtraDetailsContainer>
            <Description>
               <GrayLine />
               <DescriptionHeader>Description</DescriptionHeader>
               <DescriptionText>{jobDescription}</DescriptionText>
            </Description>
         </JobCardContainer>
      </Link>
   )
})

export default JobCard
