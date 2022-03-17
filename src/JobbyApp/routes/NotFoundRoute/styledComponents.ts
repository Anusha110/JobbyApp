import styled from 'styled-components'

export const NotFoundPage = styled.div`
   height: 100vh;
   background-color: black;
   display: flex;
   justify-content: center;
   flex-direction: column;
`

export const NotFoundContainer = styled.div`
   align-self: center;
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const NotFoundHeader = styled.h1`
   color: white;
   font-size: 30px;
   margin-top: 20px;
   font-weight: bold;
   @media screen and (max-width: 768px) {
      font-size: 20px;
   }
`

export const NotFoundImage = styled.img``

export const NotFoundText = styled.p`
   color: white;
   font-size: 20px;
   @media screen and (max-width: 768px) {
      font-size: 15px;
   }
`
