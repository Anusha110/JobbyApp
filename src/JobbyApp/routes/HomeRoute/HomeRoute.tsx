import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../../components/Header/Header'
// import { withTranslation, WithTranslation } from 'react-i18next' // eslint-disable-line

import {
   FindJobsButton,
   HomeContainer,
   HomeContent,
   HomeDescription,
   HomeHeader
} from './styledComponents'

// interface HomeRouteProps extends WithTranslation {
//    dummyVar?: null //TODO:
// }

const HomeRoute = (): JSX.Element => {
   const { t } = useTranslation()

   return (
      <>
         <Header />
         <HomeContainer>
            <HomeContent>
               <HomeHeader>{t('common:app.learnReact')}</HomeHeader>
               <HomeDescription>{t('jobbyApp:home.homeText')}</HomeDescription>
               <Link to='/jobs'>
                  <FindJobsButton>Find Jobs</FindJobsButton>
               </Link>
            </HomeContent>
         </HomeContainer>
      </>
   )
}

export default HomeRoute
