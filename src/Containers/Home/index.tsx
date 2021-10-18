import { useState } from 'react'
import { SideBar } from '../../Components/SideBar'
import { SideBarItem } from '../../Components/SideBarITem'
import * as S from './style'

export function Home(): JSX.Element {
  const [compRender, setCompRender] = useState<string | JSX.Element>('rola')
  return (
    <S.ContainerHome>
      <SideBar>
        <SideBarItem
          text='Merchan...'
          render={'testando'}
          setRender={setCompRender}
        />
        <SideBarItem
          text='Merchan...'
          render={'testando'}
          setRender={setCompRender}
        />
        <SideBarItem
          text='Merchan...'
          render={'testando'}
          setRender={setCompRender}
        />
      </SideBar>
      {compRender}
    </S.ContainerHome>
  )
}
