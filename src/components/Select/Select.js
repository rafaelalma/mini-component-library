import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import Icon from '../Icon'
// import { getDisplayedValue } from './Select.helpers'

const Select = ({ label, value, onChange, children }) => {
  // const displayedValue = getDisplayedValue(value, children)

  return (
    <SelectWrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <SyledIcon id="chevron-down" size={20} />
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
  line-height: calc(19rem / 16);

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
`

const SyledIcon = styled(Icon)`
  position: absolute;
  top: 12px;
  right: 12px;
`

export default Select
