import React from 'react'
import { Route } from 'wouter'

import ExperiencePage from 'pages/experience'
import HomePage from 'pages/home'
import { env } from 'utils/env'

export const pages = {
  experience: `${env.baseUrl}experience`,
  home: `${env.baseUrl}`,
}

const Router = () => (
  <>
    <Route path={pages.home}>
      <HomePage />
    </Route>
    <Route path={`${pages.experience}/:employer`}>
      {params => <ExperiencePage employer={params.employer} />}
    </Route>
  </>
)

export default Router
