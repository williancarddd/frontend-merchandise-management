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

export const Table = styled.table`
  border-collapse: collapse;
  margin: 0 auto;
  td,
  th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #dddddd;
  }
`
