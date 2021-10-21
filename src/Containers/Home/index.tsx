import { useState } from 'react'
import { Merchandises } from '../../Components/Merchandises'
import { SideBar } from '../../Components/SideBar'
import { SideBarItem } from '../../Components/SideBarITem'
import { DataView } from '../DataView'
import * as S from './style'

export function Home(): JSX.Element {
  const [compRender, setCompRender] = useState<string | JSX.Element>('rola')
  return (
    <S.ContainerHome>
      <SideBar>
        <SideBarItem
          text='Merchan...'
          render={<Merchandises setRenderComp={setCompRender} />}
          setRender={setCompRender}
        />
        <SideBarItem
          text='Merchan...'
          render={'ddas'}
          setRender={setCompRender}
        />
        <SideBarItem
          text='Merchan...'
          render={'dasdd'}
          setRender={setCompRender}
        />
      </SideBar>
      <S.ContainerContent>
        <DataView>{compRender}</DataView>
      </S.ContainerContent>
    </S.ContainerHome>
  )
}
