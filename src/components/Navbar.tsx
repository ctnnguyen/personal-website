import React from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components'
import { colors, mediaQueries } from 'utils/theme'
import KebabMenu from './KebabMenu'

interface Props {
  color: string
}

const Wrapper = styled.div<Props>`
  background-color: ${props => props.color};
  position: sticky;
  top: 0;
`

const StyledContainer = styled(Container)`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media only screen and (min-width: ${mediaQueries.md}) {
    padding: 0 50px;
  }
`

const Brand = styled.p`
  letter-spacing: 2px;
`

const Separator = styled.hr<Props>`
  border-bottom: 2px solid ${colors.greyLight};
  background-color: ${props => props.color};
  margin: 0;
`

const Navbar = (props: Props) => {
  return (
    <Wrapper color={props.color}>
      <StyledContainer fluid>
        <Brand>CHRISTINE NGUYEN</Brand>
        <KebabMenu />
      </StyledContainer>
      <Separator color={props.color} />
    </Wrapper>
  )
}

export default Navbar
