import React from "../../snowpack/pkg/react.js";
import Navbar from "../components/Navbar.js";
import {getExperienceByEmployer} from "../utils/experiences.js";
import {colors} from "../utils/theme.js";
const Experience = (props) => {
  const workHistory = getExperienceByEmployer(props.employer);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, {
    color: colors.greyDark
  }));
};
export default Experience;
