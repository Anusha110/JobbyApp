import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Route } from 'react-router-dom'
import AllJobsDetailsRoute from '../routes/AllJobsDetailsRoute/AllJobsDetailsRoute'
import JobDetailsRoute from '../routes/JobDetailsRoute/JobDetailsRoute'
import Home from '../routes/HomeRoute/HomeRoute'
import ProtectedRoute from '../../Common/routes/App/ProtectedRoute'

const homeRoute = (
   <ProtectedRoute key={uuidv4()} exact path='/' component={Home} />
)

const allJobDetailsRoute = (
   <ProtectedRoute
      key={uuidv4()}
      exact
      path='/jobs'
      component={AllJobsDetailsRoute}
   />
)

const jobDetailsRoute = (
   <ProtectedRoute
      key={uuidv4()}
      exact
      path='/jobs/:id'
      component={JobDetailsRoute}
   />
)

export default [homeRoute, allJobDetailsRoute, jobDetailsRoute]
