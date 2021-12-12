import React from "../../snowpack/pkg/react.js";
import styled from "../../snowpack/pkg/styled-components.js";
import Navbar from "../components/Navbar.js";
import Timeline from "../components/Timeline.js";
import {colors, fontSizes} from "../utils/theme.js";
const Content = styled.div`
  margin: 100px 0 200px;
`;
const Title = styled.h1`
  padding: 40px 0;
  text-align: center;
  font-size: ${fontSizes.header};
`;
const HomePage = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, {
    color: colors.greyDark
  }), /* @__PURE__ */ React.createElement(Content, null, /* @__PURE__ */ React.createElement(Title, null, "Check out my work history."), /* @__PURE__ */ React.createElement(Timeline, null)));
};
export default HomePage;
