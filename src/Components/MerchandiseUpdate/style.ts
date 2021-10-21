import styled from 'styled-components'

export const ContainerMerchandiseUpdate = styled.div`
  width: 100%;
  height: 100%;
  padding: 4px;
`
export const ContainerButton = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 30px;
`
export const FormUpdate = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerInfo = styled.label`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 5px;
  margin: 1px;
  margin-bottom: 1px;
  font-size: 16px;
`

export const InputUpdate = styled.input`
  display: block;
  height: 20px;
  padding: 5px;
  border-radius: 5px;
  margin-top: 2px;
  border: 1px solid;
  &:focus {
    outline: 0.5px solid #1c1919f2;
  }
`
export const SelectUpdate = styled.select`
  width: 220px;
  padding: 4px;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    outline: 0.5px solid #1c1919f2;
  }
`
export const CancelUpdate = styled.button`
  width: 5rem;
  height: 2rem;
  background-color: #d14242e3;
  color: #d7cbcb;
  border-radius: 0.3em;
  border: none;
  &:active {
    background-color: #340404e3;
  }
`
export const ConfirmUpdate = styled.button`
  width: 5rem;
  height: 2rem;
  background-color: #085828e3;
  color: #d7cbcb;
  border-radius: 0.3em;
  border: none;
  &:active {
    background-color: #0b7e39e3;
  }
`
