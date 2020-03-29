import React from 'react'
import styled from 'styled-components'

// EXAMPLE
// highlighted sections will all display the following error:

// Visible, non-interactive elements with click handlers must have at least one keyboard listener.
// eslint(styled-components-a11y/click-events-have-key-events) */

const Div = styled.div``

// div with no onclick does not have on error
const DivNoError = () => <Div />
// when onClick is added, error appears
const DivError = () => <Div onClick={() => 0} />

// props can be added via attrs method
const DivAttrs = styled.div.attrs({ foo: 'bar' })``
const DivAttrsNoError = () => <DivAttrsNoError />

// if those props trigger an error, this trickles down to the component
const DivOnClickAttrs = styled.div.attrs({ onClick: () => 0 })``
const DivOnClickAttrsError = () => <DivOnClickAttrs />

// extending existing components maintains the prop/attributes
// Note: must use function form (not .extend)
const StyledDiv = styled(Div)``
const StyledDivNoError = () => <StyledDiv />

const StyledDivOnClickAttrs = styled(DivOnClickAttrs)``
const StyledDivOnClickAttrsError = <StyledDivOnClickAttrs />

// buttons can have click handlers (aria label added to silence 'control-has-associated-label'error.
// it is kept on bottom example just to show it is not the source of the error when using as="div")
const ButtonOnClickAttrs = styled.button.attrs({ onClick: () => 0, 'aria-label': 'Save' })``
const ButtonOnClickAttrsNoError = () => <ButtonOnClickAttrs />
// when this component is rendered as a div, the click-events-have-key-events error resurfaces
const ButtonOnClickAttrsAsDiv = styled.button.attrs({ onClick: () => 0, 'aria-label': 'Save' })``
const ButtonOnClickAttrsAsDivError = () => <ButtonOnClickAttrsAsDiv as="div" />

export default {
  DivNoError,
  DivError,
  StyledDivNoError,
  StyledDivOnClickAttrsError,
  StyledDiv,
  DivAttrs,
  DivOnClickAttrsError,
  ButtonOnClickAttrsNoError,
  ButtonOnClickAttrsAsDivError,
}
