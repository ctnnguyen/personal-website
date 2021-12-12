import React from 'react'

import Navbar from 'components/Navbar'
import { getExperienceByEmployer } from 'utils/experiences'
import { colors } from 'utils/theme'

interface Props {
  employer: string
}

const Experience = (props: Props) => {
  const workHistory = getExperienceByEmployer(props.employer)

  return (
    <>
      <Navbar color={colors.greyDark} />
    </>
  )
}

export default Experience
