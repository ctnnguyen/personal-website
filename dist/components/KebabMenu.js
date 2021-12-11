import React from "../../_snowpack/pkg/react.js";
import styled from "../../_snowpack/pkg/styled-components.js";
import {colors} from "../utils/theme.js";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const Circle = styled.div`
  width: 4px;
  height: 4px;
  margin: 3px;
  background-color: ${colors.white};
  border-radius: 50%;
`;
const KebabMenu = () => {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Circle, null), /* @__PURE__ */ React.createElement(Circle, null), /* @__PURE__ */ React.createElement(Circle, null));
};
export default KebabMenu;
