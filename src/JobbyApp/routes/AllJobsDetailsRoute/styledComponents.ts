import { AiFillHome } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import colors from '../../../Common/themes/Colors'

export const AllJobDetailsContainer = styled.div`
   background-color: ${colors.black};
   min-height: 100vh;
`

export const ContentContainer = styled.div`
   ${tw`flex flex-row`}
   margin-top: 1%;
   @media screen and (max-width: 768px) {
      ${tw`flex flex-col items-center`}
   }
`

export const LeftMenuContainer = styled.div`
   ${tw`flex flex-col`}
   margin-left: 2%;
   @media screen and (max-width: 768px) {
      display: none;
   }
`
export const TopMenuContainer = styled.div`
   ${tw`flex flex-col`}
   width: 90%;
   @media screen and (min-width: 768px) {
      display: none;
   }
`

export const JobCardsAndSearchContainer = styled.div`
   ${tw`flex flex-col items-start`}
   margin: 40px;
   margin-right: 2%;
   margin-left: 5%;
   margin-top: 20px;
   width: 60%;
   @media screen and (max-width: 768px) {
      margin-right: 2%;
      margin-left: 2%;
      width: 90%;
   }
`

export const JobsLoadingAndFailureContainer = styled.div`
   align-self: center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   height: 90%;
`

export const ProfileLoadingAndFailureContainer = styled.div`
   align-self: center;
   display: flex;
   align-items: center;
   height: 150px;
`

export const SearchContainer = styled.div`
   ${tw`flex flex-row justify-between`}
   margin-bottom: 30px;
   border: 2px solid #2c364c;
   border-radius: 5px;
   @media screen and (max-width: 768px) {
      width: 100%;
   }
`

export const SearchInput = styled.input`
   background-color: transparent;
   color: white;
   padding: 10px;
   border: none;
   font-family: Roboto;
   font-size: 15px;
   width: 400px;
   @media screen and (max-width: 768px) {
      width: 100%;
   }
`

export const SearchButton = styled.button`
   padding-left: 15px;
   padding-right: 15px;
   color: gray;
   background-color: #202020;
   border: none;
   cursor: pointer;
   outline: none;
`

export const JobCardsContainer = styled.div`
   ${tw`flex flex-col items-center`}
`

export const NoJobsFound = styled.div`
   ${tw`flex flex-col items-center`}
   margin: 60px;
   color: white;
`

export const NoJobsFoundHeader = styled.h1`
   color: white;
   font-size: 45px;
   font-weight: bold;
   margin-bottom: 15px;
   @media screen and (max-width: 992px) {
      font-size: 20px;
   }
   @media screen and (max-width: 768px) {
      font-size: 20px;
      margin: 0px;
   }
`
export const NoJobsFoundDescription = styled.p``

export const RetryButton = styled.button`
   color: white;
   padding: 15px;
   border-radius: 5px;
   border: none;
   width: 100px;
   margin-top: 20px;
   font-weight: bold;
   background-color: #4f46e5;
`

// export const SearchInput = styled.input`
//    background-color: black;
//    height: 90vh;
// `

//    export const AllJobDetailsContainer = styled.div`
//    ${tw`flex flex-row justify-between items-center`}
//    height: 10vh;
//    background-color: #272727;
//    padding-left: 20px;
//    padding-right: 20px;
