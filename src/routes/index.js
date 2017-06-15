import Home from './Home'
import Dashboard from './Dashboard'

export const createRoutes = () => ({
  path: '/',
  indexRoute: Home,
  childRoutes: [
    {
      onEnter(nextState, redirect, done) {
      },
      childRoutes: [
        Dashboard
      ]
    }
  ]
})

export default createRoutes
