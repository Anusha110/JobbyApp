import { AiFillHome } from 'react-icons/ai'
import { BsFillBagFill } from 'react-icons/bs'
import { FiLogOut } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

export const HeaderContainer = styled.div`
   ${tw`flex flex-row justify-between items-center`}
   height: 10vh;
   background-color: #272727;
   padding-left: 20px;
   padding-right: 20px;
`

export const LargeScreenContainer = styled.div`
   ${tw`flex flex-row justify-between items-center`}
   width: 100%;
   @media screen and (max-width: 767px) {
      display: none;
   }
`

export const SmallScreenContainer = styled.div`
   ${tw`flex flex-row justify-between items-center`}
   width: 100%;
   @media screen and (min-width: 768px) {
      display: none;
   }
`

export const HeaderLogo = styled.img`
   height: 50px;
   margin: 30px;
`

export const HeaderLogoSmall = styled.img`
   height: 30px;
   margin: 30px;
`

export const NavLinksContainer = styled.div`
   ${tw`flex flex-row justify-around text-white mr-[10px]`}
   font-size: 20px;
   font-family: Roboto;
   font-weight: 500;
`

export const NavBarIcon = styled(AiFillHome)`
   margin-right: 30px;
`

export const HomeIcon = styled(AiFillHome)`
   margin-right: 30px;
`
export const JobIcon = styled(BsFillBagFill)`
   margin-right: 30px;
`

export const LogoutIcon = styled(FiLogOut)`
   margin-right: 30px;
`

export const HomeText = styled.p`
   margin-right: 40px;
   text-decoration: none;
`
export const HomeLink = styled(Link)`
   color: white;
   text-decoration: none;
`

export const JobsText = styled.p`
   margin-right: 10px;
`

export const Logout = styled.div`
   ${tw`text-white`}
   padding: 10px 30px 10px 30px;
   margin: 30px;
   border-radius: 8px;
   background-color: #6366f1;
   outline: none;
   cursor: pointer;
   border: none;
   font-size: 18px;
   font-family: Roboto;
   font-weight: bold;
`
