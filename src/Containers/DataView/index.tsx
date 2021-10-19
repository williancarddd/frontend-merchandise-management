import * as S from './style'
export function DataView({
  children,
}: {
  children: JSX.Element[] | JSX.Element | string
}): JSX.Element {
  return <S.ContainerView>{children}</S.ContainerView>
}
