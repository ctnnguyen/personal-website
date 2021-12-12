import React from "../../snowpack/pkg/react.js";
import Col from "../../snowpack/pkg/react-bootstrap/Col.js";
import Container from "../../snowpack/pkg/react-bootstrap/Container.js";
import styled from "../../snowpack/pkg/styled-components.js";
import Navbar from "../components/Navbar.js";
import Timeline from "../components/timeline/Timeline.js";
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
  cursor: pointer;
  text-shadow:
    -1px -1px 0 ${colors.greyLight},
    1px -1px 0 ${colors.greyLight},
    -1px 1px 0 ${colors.greyLight},
    1px 1px 0 ${colors.greyLight};
`;
const HomePage = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Navbar, {
    color: colors.greyDark
  }), /* @__PURE__ */ React.createElement(Timeline, null));
};
export default HomePage;
