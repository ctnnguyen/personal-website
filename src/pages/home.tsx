import React from 'react'
import styled from 'styled-components'

import Navbar from 'components/Navbar'
import Timeline from 'components/Timeline'
import { colors, fontSizes } from 'utils/theme'

const Content = styled.div`
  margin: 100px 0 200px;
`

const Title = styled.h1`
  padding: 40px 0;
  text-align: center;
  font-size: ${fontSizes.header};
`

const HomePage = () => {
  return (
    <>
      <Navbar color={colors.greyDark} />
      <Content>
        <Title>Check out my work history.</Title>
        <Timeline />
      </Content>
    </>
  )
}

export default HomePage
