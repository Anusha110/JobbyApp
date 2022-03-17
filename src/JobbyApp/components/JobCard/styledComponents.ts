import { MdLocationOn, MdWork } from 'react-icons/md'
import styled from 'styled-components'
import tw from 'twin.macro'

export const JobCardContainer = styled.div`
   ${tw`flex flex-col`}
   background-color: #272727;
   padding: 20px;
   margin-bottom: 30px;
   border-radius: 20px;
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
`
export const DescriptionHeader = styled.p`
   margin-top: 20px;
   font-weight: 600;
   font-size: 20px;
`

export const DescriptionText = styled.p`
   font-size: 18px;
   margin-top: 10px;
   @media screen and (max-width: 1200px) {
      font-size: 16px;
   }
`

// ${tw`flex flex-col`}
//    @media screen and (min-width: 768px) {
//       ${tw`flex flex-row justify-between pb-[100px]`}
//    }
