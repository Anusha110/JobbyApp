import React from 'react'
import { Route } from 'react-router-dom'
import LoginFormRoute from './LoginFormRoute/LoginForm'

const loginRoute = <Route exact path='/login' component={LoginFormRoute} />

export default [loginRoute]
