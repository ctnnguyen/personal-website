import React from "../../snowpack/pkg/react.js";
import Container from "../../snowpack/pkg/react-bootstrap/Container.js";
import styled from "../../snowpack/pkg/styled-components.js";
import {colors, mediaQueries} from "../utils/theme.js";
import KebabMenu from "./KebabMenu.js";
const Wrapper = styled.div`
  background-color: ${(props) => props.color};
  position: absolute;
  top: 0;
  width: 100%;
`;
const StyledContainer = styled(Container)`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  
  @media only screen and (min-width: ${mediaQueries.md}) {
    padding: 0 50px;
  }
`;
const Brand = styled.p`
  letter-spacing: 2px;
  color: ${colors.white}
`;
const Separator = styled.hr`
  border-bottom: 2px solid ${colors.greyLight};
  background-color: ${(props) => props.color};
  margin: 0;
`;
const Navbar = (props) => {
  return /* @__PURE__ */ React.createElement(Wrapper, {
    color: props.color
  }, /* @__PURE__ */ React.createElement(StyledContainer, {
    fluid: true
  }, /* @__PURE__ */ React.createElement(Brand, null, "CHRISTINE NGUYEN"), /* @__PURE__ */ React.createElement(KebabMenu, null)), /* @__PURE__ */ React.createElement(Separator, {
    color: props.color
  }));
};
export default Navbar;
