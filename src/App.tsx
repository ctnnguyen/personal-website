import React from 'react'
import { Route } from 'wouter'

import HomePage from 'pages/home'
import LinksPage from 'pages/links'
import { env } from 'utils/env'
import { pages } from 'utils/router'

const App = () => (
  <>
    <Route path={`${env.baseUrl}${pages.home}`}>
      <HomePage />
    </Route>
    <Route path={`${env.baseUrl}${pages.links}`}>
      <LinksPage />
    </Route>
  </>
)

export default App
