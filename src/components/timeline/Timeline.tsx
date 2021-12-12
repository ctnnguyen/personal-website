import React from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import { format } from 'date-fns'

import { colors, fontSizes, fontWeights } from 'utils/theme'
import { experiences } from './experiences'

// @todo fix hard-coding margin top to height of navbar
const StyledContainer = styled(Container)`
  margin-top: 100px;
  color: ${colors.greyDark};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    left: 50%;
    background-color: ${colors.blue};
  }
`

const StyledList = styled.ul`
  padding: 0;
`

const TimelineItem = styled.li`
  margin-bottom: 50px;
  list-styled-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Circle = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin: 0 20px;
  
  &:after {
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
              <Employer>{experience.employer}</Employer>
              <Position>{experience.position}</Position>
            </Event>
          </TimelineItem>
        ))
      }
    </StyledList>
  </StyledContainer>
)

export default Timeline
