import styled from 'styled-components'

export const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 8em;
  height: 100vh;
`

export const SideBarHeader = styled.header`
  background-color: #e3dede7a;
  height: 10em;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #262424e6;
`

export const SideBarLogo = styled.h3`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 5px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 900;
  text-shadow: 1px -1px #262424e6;
  color: #262424e6;
`

export const SideBarBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e3dede7a;
  height: 95vh;
  gap: 10px;
  padding-top: 10px;
`
