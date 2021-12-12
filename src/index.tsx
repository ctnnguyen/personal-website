import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Router from 'utils/router'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept()
}
