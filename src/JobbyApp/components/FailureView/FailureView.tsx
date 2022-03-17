import { observer, inject } from 'mobx-react'
import React from 'react'
import JobsStore from '../../stores/JobsStore/JobsStore'
import { FailureHeader, FailureText, RetryButton } from './styledComponents'

interface FailureViewType {
   fetchData: () => void
}

const FailureView = observer((props: FailureViewType) => {
   const onFetchData = () => {
      const { fetchData } = props
      fetchData()
   }

   return (
      <>
         <img
            src='https://assets.ccbp.in/frontend/react-js/failure-img.png'
            alt='failure view'
         />
         <FailureHeader>Oops! Something went wrong!</FailureHeader>
         <FailureText>
            We cannot seem to find the page you are looking for
         </FailureText>
         <RetryButton onClick={onFetchData}>Retry</RetryButton>
      </>
   )
})

export default FailureView
