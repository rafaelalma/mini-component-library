/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const MIN_VALUE = 0
const MAX_VALUE = 100

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--borderRadius': 8 + 'px',
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]

  if (value < MIN_VALUE) {
    value = MIN_VALUE
  } else if (value > MAX_VALUE) {
    value = MAX_VALUE
  }

  let endBorderRadius = 0
  if (value >= 99.8) {
    endBorderRadius = '2px'
  }
  if (value >= 100) {
    endBorderRadius = '4px'
  }

  return (
    <>
      <VisuallyHidden>
        <span id="loadinglabel">Loading</span>
      </VisuallyHidden>
      <OuterWrapper
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
        style={styles}
      >
        <InnerBar value={value} endBorderRadius={endBorderRadius} />
      </OuterWrapper>
    </>
  )
}

const OuterWrapper = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const InnerBar = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-start-start-radius: 4px;
  border-end-start-radius: 4px;
  border-end-end-radius: ${(props) => props.endBorderRadius};
  border-start-end-radius: ${(props) => props.endBorderRadius};
`

export default ProgressBar
