import React from "../snowpack/pkg/react.js";
import {Route} from "../snowpack/pkg/wouter.js";
import HomePage from "./pages/home.js";
import LinksPage from "./pages/links.js";
import {env} from "./utils/env.js";
import {pages} from "./utils/router.js";
const App = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Route, {
  path: `${env.baseUrl}${pages.home}`
}, /* @__PURE__ */ React.createElement(HomePage, null)), /* @__PURE__ */ React.createElement(Route, {
  path: `${env.baseUrl}${pages.links}`
}, /* @__PURE__ */ React.createElement(LinksPage, null)));
export default App;
