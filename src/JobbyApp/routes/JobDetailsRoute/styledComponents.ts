import { MdLocationOn, MdWork } from 'react-icons/md'
import styled from 'styled-components'
import tw from 'twin.macro'

export const JobCardContainer = styled.div`
   ${tw`flex flex-col`}
   background-color: #272727;
   padding: 20px;
   margin-bottom: 30px;
   border-radius: 20px;
   margin: 3%;
   width: 65%;
   @media screen and (max-width: 992px) {
      width: 85%;
   }
   @media screen and (max-width: 768px) {
      width: 94%;
      margin-top: 7%;
   }
`

export const JobCardHeader = styled.div`
   ${tw`flex flex-row`}
`

export const CompanyLogo = styled.img`
   height: 70px;
   align-self: flex-start;
`

export const JobTitle = styled.p`
   color: white;
   font-weight: bold;
   font-family: Roboto;
   margin-top: 0px;
   margin-bottom: 0px;
   font-size: 20px;
`

export const JobTitleAndRatingContainer = styled.div`
   ${tw`flex flex-col items-start`}
   margin-left: 10px;
   margin-top: 5px;
`

export const RatingContainer = styled.div`
   ${tw`flex flex-row justify-center items-center`}
   font-family: Roboto;
`

export const Rating = styled.p`
   color: white;
   font-size: 20px;
   margin-left: 5px;
   margin-top: 10px;
   margin-bottom: 10px;
`

export const JobCardExtraDetailsContainer = styled.div`
   ${tw`text-white flex flex-row items-center justify-between`}
   font-family: Roboto;
   font-weight: 600;
   margin-top: 20px;
`

export const JobLocationAndEmploymentType = styled.div`
   ${tw`flex flex-row items-center`}
`

export const JobDetails = styled.div`
   ${tw`text-white flex flex-row items-center`}
   font-family: Roboto;
   margin-right: 25px;
   font-weight: normal;
`

export const LocationIcon = styled(MdLocationOn)`
   margin-right: 5px;
   color: white;
`
export const WorkIcon = styled(MdWork)`
   margin-right: 5px;
   color: white;
`

export const JobPackage = styled.p`
   font-size: 20px;
   font-weight: 500;
`

export const GrayLine = styled.hr`
   color: #475569;
`

export const Description = styled.div`
   font-family: Roboto;
   color: white;
   margin-top: 20px;
   margin-bottom: 30px;
`
export const DescriptionHeader = styled.p`
   margin-top: 20px;
   font-weight: 600;
   font-size: 25px;
`

export const DescriptionHeaderContainer = styled.div`
   ${tw`flex flex-row justify-between`}
`

export const DescriptionText = styled.p`
   font-size: 18px;
   margin-top: 10px;
   @media screen and (max-width: 1200px) {
      font-size: 16px;
   }
`

export const VisitContainer = styled.a`
   ${tw`flex flex-row items-center`}
`

export const VisitText = styled.p`
   margin-right: 10px;
   font-size: 20px;
   color: #b6c5ff;
   font-weight: bold;
`

export const JobDetailsPageContainer = styled.div`
   background-color: black;
   min-height: 100vh;
`

export const JobDetailsContainer = styled.div`
   ${tw`flex flex-col items-center`}
`

export const SkillsContainer = styled.div`
   margin-top: 30px;
`
export const Skills = styled.div`
   ${tw`flex flex-row justify-around flex-wrap`}
`

export const SkillsHeader = styled.p`
   font-size: 25px;
   font-weight: bold;
   color: white;
   margin-bottom: 10px;
`

export const Skill = styled.div`
   ${tw`flex flex-row items-center`}
   width: 30%;
   margin-top: 30px;
   margin-bottom: 30px;
`

export const SkillImage = styled.img`
   height: 50px;
`
export const SkillName = styled.p`
   color: white;
   margin-left: 15px;
   font-weight: semi-bold;
`

export const LifeAtCompanyContainer = styled.div`
   ${tw`flex flex-col text-white`}
   margin-top: 30px;
`

export const LifeAtCompanySection = styled.div`
   ${tw`text-white flex flex-row`}
`

export const LifeAtCompanyHeader = styled.p`
   font-size: 25px;
   font-weight: bold;
`

export const LifeAtCompanyDescription = styled.div`
   margin-top: 10px;
   font-size: 20px;
   @media screen and (max-width: 1200px) {
      font-size: 16px;
   }
`

export const LifeAtCompanyImage = styled.img`
   height: 260px;
   width: 260px;
`

export const SimilarJobsCards = styled.div`
   ${tw`flex flex-row `}
   flex-wrap: wrap;
   @media screen and (max-width: 768px) {
      justify-content: center;
   }
`

export const SimilarJobsContainer = styled.div`
   width: 65%;
   @media screen and (max-width: 992px) {
      width: 85%;
   }
   @media screen and (max-width: 768px) {
      width: 100%;
   }
`

export const SimilarJobsHeader = styled.p`
   color: white;
   font-size: 35px;
   font-weight: bold;
   margin-bottom: 2%;
   @media screen and (max-width: 768px) {
      margin-left: 3%;
   }
`

export const FailureAndLoadingContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 100vh;
`

// ${tw`flex flex-col`}
//    @media screen and (min-width: 768px) {
//       ${tw`flex flex-row justify-between pb-[100px]`}
//    }
