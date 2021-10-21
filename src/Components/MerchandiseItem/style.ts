import styled, { css } from 'styled-components'

interface IStateMerc {
  state?: string
}
function ConfigState(state?: string) {
  switch (state) {
    case 'false':
      return 'red'
    case 'true':
      return 'green'
    default:
      return 'yellow'
  }
}
export const StateMerch = styled.div(({ state }: IStateMerc) => {
  return css`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${ConfigState(state)};
  `
})
export const UpdateMerchButton = styled.button`
  width: 5rem;
  height: 2rem;
  background-color: #5842d1e3;
  color: #d7cbcb;
  border-radius: 0.3em;
  border: none;
  &:active {
    background-color: #4296d1e3;
  }
`
