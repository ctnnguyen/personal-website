import React from 'react'
import styled from 'styled-components'
import { colors } from 'utils/theme'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`

const Circle = styled.div`
  width: 4px;
  height: 4px;
  margin: 3px;
  background-color: ${colors.white};
  border-radius: 50%;
`

const KebabMenu = () => {
  return (
    <Container>
      <Circle />
      <Circle />
      <Circle />
    </Container>
  )
}

export default KebabMenu
