import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Home from './Home'
import Dashboard from './Dashboard'

export const createRoutes = () => (
  <Route path="/" component={Home}>
    {Dashboard()}
  </Route>
)

export default createRoutes()
