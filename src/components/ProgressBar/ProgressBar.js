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
  if (value < MIN_VALUE || value > MAX_VALUE) {
    throw new Error(`Invalid value passed to ProgressBar: ${value}`)
  }

  const styles = SIZES[size]
  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`)
  }

  return (
    <>
      <VisuallyHidden>
        <span id="loadinglabel">Loading: ${value}%</span>
      </VisuallyHidden>
      <OuterWrapper
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
        style={styles}
      >
        <InnerBarWrapper>
          <InnerBar value={value} />
        </InnerBarWrapper>
      </OuterWrapper>
    </>
  )
}

const OuterWrapper = styled.div`
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const InnerBarWrapper = styled.div`
  height: 100%;
  border-radius: 4px;
  /* Trim off corners when progress bar is near-full */
  overflow: hidden;
`

const InnerBar = styled.div`
  width: ${(props) => props.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-start-start-radius: 4px;
  border-end-start-radius: 4px;
`

export default ProgressBar
