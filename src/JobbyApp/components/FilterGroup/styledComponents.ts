import styled from 'styled-components'
import tw from 'twin.macro'

export const FiltersGroupContainer = styled.div`
   padding-left: 20px;
   @media screen and (max-width: 768px) {
      padding-left: 0px;
   }
`

export const FilterSectionContainer = styled.div`
   ${tw`flex flex-col text-white`}
   font-family: Roboto;
   padding-top: 20px;
   padding-bottom: 20px;
   @media screen and (max-width: 768px) {
      padding-top: 20px;
      padding-bottom: 10px;
   }
`
export const FilterHeader = styled.p`
   font-weight: 700;
`
export const InputContainer = styled.div`
   margin-top: 10px;
   margin-bottom: 10px;
`
export const InputElement = styled.input`
   margin-right: 10px;
   cursor: pointer;
`

export const GrayLine = styled.hr`
   color: #2c364c;
   border-top-width: 2px;
`
