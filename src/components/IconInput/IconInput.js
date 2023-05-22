import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const SIZES = {
  small: {
    '--fontSize': 14 + 'px',
    '--lineHeight': 16 / 16,
    '--border': 1 + 'px',
    '--padding': 32 + 'px',
  },
  large: {
    '--fontSize': 18 + 'px',
    '--lineHeight': 21 / 16,
    '--border': 2 + 'px',
    '--padding': 40 + 'px',
  },
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size]
  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`)
  }

  return (
    <LabelWrapper htmlFor="input" style={styles}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper id={icon} size={size === 'small' ? 18 : 24} />
      <InputWrapper
        id="input"
        width={width}
        size={size}
        placeholder={placeholder}
      />
    </LabelWrapper>
  )
}

const LabelWrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`

const IconWrapper = styled(Icon)`
  position: absolute;
`

const InputWrapper = styled.input`
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  width: ${(p) => p.width}px;
  padding-left: var(--padding);
  font-size: var(--fontSize);
  line-height: var(--lineHeight);
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`

export default IconInput
