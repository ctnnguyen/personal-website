import React from 'react'
import ReactDOM from 'react-dom'
import Home from 'pages/home'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
