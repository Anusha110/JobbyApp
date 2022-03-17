import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import { Route, Switch, Redirect } from 'react-router-dom'
import stores from '../../stores'
import './App.css'
import loginFormRoute from '../../../Authentication/routes'
import jobbyAppRoutes from '../../../JobbyApp/routes'

const App = () => (
   <Provider {...stores}>
      <Switch>
         {loginFormRoute}
         {jobbyAppRoutes}
      </Switch>
   </Provider>
)

// const App = () => (
//    <Provider {...stores}>
//       <Switch>
//          <Route exact path='/login' component={LoginForm} />
//          <ProtectedRoute exact path='/' component={Home} />
//          <ProtectedRoute exact path='/jobs' component={AllJobsDetails} />
//          <ProtectedRoute exact path='/jobs/:id' component={JobDetails} />
//          <Route component={NotFound} />
//       </Switch>
//    </Provider>
// )

export default App

// import React from 'react'
// import { Route, Switch, Redirect } from 'react-router-dom'
// import LoginForm from '../../components/LoginForm'
// import Home from '../../components/Home'
// import Products from '../../components/Products'
// import ProductItemDetails from '../../components/ProductItemDetails'
// import Cart from '../../components/Cart'
// import NotFound from '../../components/NotFound'
// import ProtectedRoute from '../../components/ProtectedRoute'

// import './App.css'

// const App = () => (
//    <Switch>
//       <Route exact path='/login' component={LoginForm} />
//       <ProtectedRoute exact path='/products' component={Products} />
//       <ProtectedRoute
//          exact
//          path='/products/:id'
//          component={ProductItemDetails}
//       />
//       <ProtectedRoute exact path='/cart' component={Cart} />
//       <ProtectedRoute exact path='/' component={Home} />

//       <Route exact path='/not-found'>
//          {<NotFound />}
//       </Route>
//       <Redirect exact to='not-found' />
//    </Switch>
// )

// export default App
