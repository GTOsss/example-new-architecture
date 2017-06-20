import Home from './Home'
import React from 'react'
import { Route } from 'react-router'

const route = () => (
  <Route path="dashboard" component={Home} />
)

export default route
