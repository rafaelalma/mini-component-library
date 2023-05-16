import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'

const Select = ({ value, onChange, children }) => {
  return (
    <SelectWrapper>
      <SyledIcon id="chevron-down" size={24} />
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </SelectWrapper>
  )
}

const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: ${19 / 16}rem;
  isolation: isolate;

  &:hover {
    color: ${COLORS.black};
  }
`

const StyledSelect = styled.select`
  appearance: none;
  display: block;
  padding: 12px 16px;
  padding-right: 52px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: inherit;
  font-size: inherit;
  border: none;
  position: relative;
`

const SyledIcon = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
`

export default Select
