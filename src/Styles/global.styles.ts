import styled, { css } from 'styled-components'

interface IBoxImage {
  isAligm?: boolean
}

export const BoxImage = styled.img(
  ({ isAligm }: IBoxImage) => css`
    display: block;
    width: 80px;
    height: 80px;
    margin: ${isAligm ? 'auto' : 'none'};
    padding: 1em;
  `
)
