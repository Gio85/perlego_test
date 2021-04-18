import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ROUTE } from '../../../types'
import { Home } from '../../pages/Home'

export const RouterProvider: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTE.HOME} component={Home} />
    </Switch>
  </Router>
)
