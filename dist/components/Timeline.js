import React from "../../snowpack/pkg/react.js";
import Container from "../../snowpack/pkg/react-bootstrap/Container.js";
import styled from "../../snowpack/pkg/styled-components.js";
import {format} from "../../snowpack/pkg/date-fns.js";
import {Link} from "../../snowpack/pkg/wouter.js";
import {experiences} from "../utils/experiences.js";
import {pages} from "../utils/router.js";
import {colors, fontSizes, fontWeights} from "../utils/theme.js";
const StyledContainer = styled(Container)`
  color: ${colors.greyDark};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    left: 50%;
    background-color: ${colors.blue};
  }
`;
const StyledList = styled.ul`
  padding: 20px 0 0;
`;
const TimelineItem = styled.li`
  list-styled-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;
const Circle = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin: 0 20px;

  &::after {
    content: '';
    width: 12px;
    height: 12px;
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -5px;
    margin-top: -5px;
    border: 2px solid ${colors.blue};
    border-radius: 14px;
    background-color: ${colors.white};
  }
`;
const DateContainer = styled.div`
  width: 50%;
  text-align: right;
`;
const Event = styled.div`
  width: 50%;
`;
const Date = styled.p`
  font-size: ${fontSizes.textSm};
  font-weight: ${fontWeights.bold};
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.greyDark};
  
  &:hover, &:focus, &:active {
    color: ${colors.greyDark};
  }
`;
const Employer = styled.p`
  font-weight: ${fontWeights.bold};
`;
const Position = styled.p`
  color: ${colors.greyLight};
  font-size: ${fontSizes.textSm};
`;
const Timeline = () => /* @__PURE__ */ React.createElement(StyledContainer, null, /* @__PURE__ */ React.createElement(StyledList, null, experiences.map((experience, index) => /* @__PURE__ */ React.createElement(TimelineItem, {
  key: `experience-${index}`
}, /* @__PURE__ */ React.createElement(DateContainer, null, /* @__PURE__ */ React.createElement(Date, null, format(experience.startDate, "LLLL yyyy"))), /* @__PURE__ */ React.createElement(Circle, null), /* @__PURE__ */ React.createElement(Event, null, /* @__PURE__ */ React.createElement(StyledLink, {
  href: `${pages.experience}/${experience.employer}`
}, /* @__PURE__ */ React.createElement(Employer, null, experience.employer), /* @__PURE__ */ React.createElement(Position, null, experience.position)))))));
export default Timeline;