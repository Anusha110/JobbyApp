import React from 'react'
import {
   NotFoundPage,
   NotFoundContainer,
   NotFoundHeader,
   NotFoundImage,
   NotFoundText
} from './styledComponents'

const NotFoundRoute = () => (
   <NotFoundPage>
      <NotFoundContainer>
         <NotFoundImage
            src='https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'
            alt='not found'
         />
         <NotFoundHeader>Page Not Found</NotFoundHeader>
         <NotFoundText>
            were sorry, the page you requested could not be found.
         </NotFoundText>
      </NotFoundContainer>
   </NotFoundPage>
)

export default NotFoundRoute
