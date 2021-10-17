import styled, { css } from 'styled-components'
interface IinputUser {
  isError?: boolean
}
export const ContainerLogin = styled.section`
  height: 500px;
  width: 600px;
  margin: 0 auto;
  padding: 0;
  margin-top: 6em;
  box-shadow: 1px 1px 1px 1px #1a1919c4;
  border-radius: 1em;
  background-color: #dddddd6b;
  @media (max-width: 500px) {
    height: 80%;
    width: 80%;
  }
`
export const HeaderLogin = styled.div``

export const BodyLogin = styled.div``

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1.5em;
  padding: 1em;
  margin: 50px;
`
export const InputLogin = styled.input(
  ({ isError }: IinputUser) => css`
    background-color: #cbc7c7;
    padding: 1em;
    border: none;
    outline: ${isError ? '1px 1px solid' : 'none'};
    outline-color: ${isError ? 'red' : 'none'};
    border-radius: 5px;
    font-size: 1rem;
  `
)

export const InputSubmitForm = styled.button`
  width: 150px;
  height: 35px;
  border: none;
  background-color: #585050ab;
  border-radius: 0.4em;
  margin: auto;
  padding: 0.2em;
  &:active {
    background-color: #58505078;
  }
`
