import styled, { css } from 'styled-components'

export const ContainerCreateMerchandise = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px;
`

export const FormCreateMerchandise = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LabelCreateMerch = styled.label`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 2px;
`

export const InputCreateMerch = styled.input(
  ({ centerText }: { centerText?: boolean }) => {
    return css`
      margin-top: 3px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid black;
      outline: none;
      &:focus {
        outline: 1px solid #1c1919f2;
      }
      font-size: 16px;
      text-align: ${centerText ? 'center' : 'left'};
    `
  }
)

export const SelectCreateMerch = styled.select`
  padding: 5px;
  border: 1px solid black;
  outline: none;
  &:focus {
    outline: 1px solid #1c1919f2;
  }
`

export const ButtonCreateMerchandise = styled.button`
  background-color: #427215f2;
  color: white;
  padding: 8px;
  width: 120px;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  &:active {
    background-color: #70c124f2;
  }
`
