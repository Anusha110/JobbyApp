import styled from 'styled-components'
import tw from 'twin.macro'

export const HomeContainer = styled.div`
   ${tw`text-white flex flex-row`}
   font-family: Roboto;
   background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
   background-size: cover;
   height: 90vh;
   @media screen and (max-width: 768px) {
      background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');
      background-size: cover;
   }
`

export const HomeContent = styled.div`
   ${tw`text-white flex flex-col justify-center items-start self-center`}
   width: 45%;
   margin-left: 4%;
   @media screen and (max-width: 768px) {
      width: 100%;
      margin-left: 6%;
      margin-right: 6%;
      align-self: start;
   }
`

export const HomeHeader = styled.h1`
   font-size: 75px;
   font-weight: bold;
   margin-top: 7%;
   margin-bottom: 10px;
   @media screen and (max-width: 768px) {
      font-size: 45px;
   }
   @media screen and (min-width: 768px) and (max-width: 1100px) {
      font-size: 65px;
   }
`
export const HomeDescription = styled.p`
   font-size: 30px;
   margin-bottom: 5%;
   @media screen and (max-width: 768px) {
      font-size: 20px;
   }
   @media screen and (min-width: 768px) and (max-width: 1100px) {
      font-size: 25px;
   }
`
export const FindJobsButton = styled.button`
   ${tw`text-white  `}
   padding: 20px;
   border-radius: 8px;
   background-color: #6366f1;
   outline: none;
   cursor: pointer;
   border: none;
   font-size: 18px;
   font-family: Roboto;
   font-weight: bold;
`
