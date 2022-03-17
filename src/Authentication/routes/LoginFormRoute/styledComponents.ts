import styled from 'styled-components'
import tw from 'twin.macro'

export const LoginFormContainer = styled.div`
   ${tw`flex flex-col justify-center items-center min-h-screen`}
   background-color:#121212;
`

export const WebsiteLogo = styled.img`
   ${tw`pb-10 self-center`}
`

export const LoginFormEl = styled.form`
   ${tw`flex flex-col justify-center items-start rounded-lg`}
   background-color: #272727;
   width: 25%;
   padding: 3%;
   @media screen and (max-width: 768px) {
      width: 65%;
   }
`

export const InputLabel = styled.label`
   ${tw`text-white mb-2`}
   font-size: 15px;
   font-family: Roboto;
   font-weight: 500;
   margin: 5px;
   margin-top: 20px;
`

export const InputElement = styled.input`
   ${tw`text-white bg-transparent self-stretch`}
   border: 0.005em solid #b6c5ff;
   padding: 4%;
   margin: 5px;
`

export const LoginButton = styled.button`
   ${tw`text-white self-stretch`}
   margin-top: 40px;
   padding-top: 15px;
   padding-bottom: 15px;
   border-radius: 8px;
   background-color: #6366f1;
   outline: none;
   cursor: pointer;
   border: none;
   font-size: 18px;
   font-family: Roboto;
   font-weight: bold;
`

export const ErrorMessage = styled.p`
   font-size: 15px;
   color: #ff0b37;
`
