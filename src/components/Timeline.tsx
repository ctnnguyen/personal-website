import React from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import { format } from 'date-fns'
import { Link } from 'wouter'

import { experiences } from 'utils/experiences'
import { pages } from 'utils/router'
import { colors, fontSizes, fontWeights } from 'utils/theme'

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
`

const StyledList = styled.ul`
  padding: 20px 0 0;
`

const TimelineItem = styled.li`
  list-styled-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`

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
`

const DateContainer = styled.div`
  width: 50%;
  text-align: right;
`

const Event = styled.div`
  width: 50%;
`

const Date = styled.p`
  font-size: ${fontSizes.textSm};
  font-weight: ${fontWeights.bold};
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.greyDark};
  
  &:hover, &:focus, &:active {
    color: ${colors.greyDark};
  }
`

const Employer = styled.p`
  font-weight: ${fontWeights.bold};
`

const Position = styled.p`
  color: ${colors.greyLight};
  font-size: ${fontSizes.textSm};
`

const Timeline = () => (
  <StyledContainer>
    <StyledList>
      {
        experiences.map((experience, index) => (
          <TimelineItem key={`experience-${index}`}>
            <DateContainer>
              <Date>{format(experience.startDate, 'LLLL yyyy')}</Date>
            </DateContainer>
            <Circle />
            <Event>
              <StyledLink href={`${pages.experience}/${experience.employer}`}>
                <Employer>{experience.employer}</Employer>
                <Position>{experience.position}</Position>
              </StyledLink>
            </Event>
          </TimelineItem>
        ))
      }
    </StyledList>
  </StyledContainer>
)

export default Timeline
