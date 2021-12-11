import React from "../../snowpack/pkg/react.js";
import Col from "../../snowpack/pkg/react-bootstrap/Col.js";
import Container from "../../snowpack/pkg/react-bootstrap/Container.js";
import Row from "../../snowpack/pkg/react-bootstrap/Row.js";
import styled from "../../snowpack/pkg/styled-components.js";
import Navbar from "../components/Navbar.js";
import {colors, fontSizes, fontWeights} from "../utils/theme.js";
const StyledContainer = styled(Container)`
  background-color: ${colors.greyDark};
`;
const Column = styled(Col)`
  height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  color: ${colors.greyDark};
  font-size: ${fontSizes.header};
  font-weight: ${fontWeights.heavy};
  letter-spacing: 3px;
  text-shadow:
    -1px -1px 0 ${colors.greyLight},
    1px -1px 0 ${colors.greyLight},
    -1px 1px 0 ${colors.greyLight},
    1px 1px 0 ${colors.greyLight};
`;
const Home = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, {
    color: colors.greyDark
  }), /* @__PURE__ */ React.createElement(StyledContainer, {
    fluid: true
  }, /* @__PURE__ */ React.createElement(Row, null, /* @__PURE__ */ React.createElement(Column, {
    xs: 12,
    sm: 12,
    md: 4
  }, /* @__PURE__ */ React.createElement(Text, null, "TIMELINE")), /* @__PURE__ */ React.createElement(Column, {
    xs: 12,
    sm: 12,
    md: 4
  }, /* @__PURE__ */ React.createElement(Text, null, "SKILLS")), /* @__PURE__ */ React.createElement(Column, {
    xs: 12,
    sm: 12,
    md: 4
  }, /* @__PURE__ */ React.createElement(Text, null, "LINKS")))));
};
export default Home;
