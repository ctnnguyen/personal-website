import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR)
if (import.meta.hot) {
  import.meta.hot.accept()
}
