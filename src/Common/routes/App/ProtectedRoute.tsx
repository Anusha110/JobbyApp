import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { convertToObject } from 'typescript'
import { getAccessToken } from '../../utils/StorageUtils'

interface ProtectedRouteType {
   exact?: boolean
   path: string
   component: React.ComponentType<any>
}

const ProtectedRoute = (props: ProtectedRouteType) => {
   const token = getAccessToken()

   if (token === undefined) {
      return <Redirect to='/login' />
   }

   return <Route {...props} />
}

export default ProtectedRoute
