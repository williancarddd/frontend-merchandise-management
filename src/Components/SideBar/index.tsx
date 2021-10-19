import * as S from './style'
export function SideBar({
  children,
}: {
  children?: JSX.Element[]
}): JSX.Element {
  return (
    <S.ContainerSideBar>
      <S.SideBarHeader>
        <S.SideBarLogo>Manager Merchandise</S.SideBarLogo>
      </S.SideBarHeader>
      <S.SideBarBody> {children}</S.SideBarBody>
    </S.ContainerSideBar>
  )
}
