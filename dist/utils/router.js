import React from "../../snowpack/pkg/react.js";
import {Route} from "../../snowpack/pkg/wouter.js";
import ExperiencePage from "../pages/experience.js";
import HomePage from "../pages/home.js";
import {env} from "./env.js";
export const pages = {
  experience: `${env.baseUrl}experience`,
  home: `${env.baseUrl}`
};
const Router = () => /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Route, {
  path: pages.home
}, /* @__PURE__ */ React.createElement(HomePage, null)), /* @__PURE__ */ React.createElement(Route, {
  path: `${pages.experience}/:employer`
}, (params) => /* @__PURE__ */ React.createElement(ExperiencePage, {
  employer: params.employer
})));
export default Router;
