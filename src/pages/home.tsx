import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import styled from 'styled-components'
import Navbar from 'components/Navbar'
import { colors, fontSizes, fontWeights } from 'utils/theme'

const StyledContainer = styled(Container)`
  background-color: ${colors.greyDark};
`

// @todo Fix height hard-coding.
const Column = styled(Col)`
  height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;
`

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
`

const Home = () => {
  return (
    <>
      <Navbar color={colors.greyDark} />
      <StyledContainer fluid>
        <Row>
          <Column xs={12} sm={12} md={4}>
            <Text>TIMELINE</Text>
          </Column>
          <Column xs={12} sm={12} md={4}>
            <Text>SKILLS</Text>
          </Column>
          <Column xs={12} sm={12} md={4}>
            <Text>LINKS</Text>
          </Column>
        </Row>
      </StyledContainer>
    </>
  )
}

export default Home
