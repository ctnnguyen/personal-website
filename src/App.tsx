import React from 'react'
import { Route } from 'wouter'

import HomePage from 'pages/home'
import LinksPage from 'pages/links'
import { pages } from 'utils/router'

const App = () => (
  <>
    <Route path={pages.home}>
      <HomePage />
    </Route>
    <Route path={pages.links}>
      <LinksPage />
    </Route>
  </>
)

export default App
