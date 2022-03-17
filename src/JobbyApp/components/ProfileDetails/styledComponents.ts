import { AiFillHome } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

export const ProfileDetailsContainer = styled.div`
   ${tw`flex flex-col`}
   flex-wrap: wrap;
   font-family: Roboto;
   background-image: url('https://assets.ccbp.in/frontend/react-js/profile-bg.png');
   background-size: cover;
   border-radius: 20px;
   padding: 20px;
   margin: 20px;
   width: 225px;
   @media screen and (max-width: 768px) {
      width: 100%;
      margin: 0px;
      margin-bottom: 20px;
   }
`
export const ProfileImage = styled.img`
   height: 70px;
   align-self: flex-start;
   @media screen and (max-width: 768px) {
      height: 50px;
      margin-bottom: 15px;
   }
`

export const ProfileName = styled.p`
   color: #6366f1;
   font-size: 20px;
   font-weight: 600;
   margin-bottom: 0px;
   @media screen and (max-width: 768px) {
      margin-bottom: 15px;
   }
`
export const ProfileBio = styled.p`
   color: #7e858e;
   font-size: 15px;
   word-wrap: break-word;
   @media screen and (max-width: 768px) {
      margin-bottom: 25px;
   }
`
