import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'
import Cookie from 'js-cookie'
import { History } from 'history' // eslint-disable-line
import {
   HeaderContainer,
   HeaderLogo,
   HeaderLogoSmall,
   HomeIcon,
   HomeLink,
   HomeText,
   JobIcon,
   JobsText,
   LargeScreenContainer,
   Logout,
   LogoutIcon,
   NavLinksContainer,
   SmallScreenContainer
} from './styledComponents'
// import { getAccessToken } from '../../../Common/utils/StorageUtils'

interface HistoryPropsType {
   history: History
}

const Header = observer(() => {
   const onClickLogout = () => {
      Cookie.remove('access_token')
      // Cookie.remove('jwt_token')
      // history.replace('/login')
   }

   return (
      <HeaderContainer>
         <SmallScreenContainer>
            <HeaderLogoSmall
               src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
               alt='website logo'
            />
            <NavLinksContainer>
               <Link to='/'>
                  <HomeIcon />
               </Link>
               <JobIcon />
               <Link to='/logout' onClick={onClickLogout}>
                  <LogoutIcon />
               </Link>
            </NavLinksContainer>
         </SmallScreenContainer>
         <LargeScreenContainer>
            <HeaderLogo
               src='https://assets.ccbp.in/frontend/react-js/logo-img.png'
               alt='website logo'
            />
            <NavLinksContainer>
               <HomeLink to='/'>
                  <HomeText>Home</HomeText>
               </HomeLink>
               <Link to='/jobs'>
                  <JobsText>Jobs</JobsText>
               </Link>
            </NavLinksContainer>
            <Link to='/login' onClick={onClickLogout}>
               <Logout>Logout</Logout>
            </Link>
         </LargeScreenContainer>
      </HeaderContainer>
   )
})

export default withRouter(Header)
