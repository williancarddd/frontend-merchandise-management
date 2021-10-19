import * as S from './style'

interface ISideBarITem {
  text: string
  render?: string | JSX.Element
  setRender?: React.Dispatch<string | JSX.Element>
}
export function SideBarItem({
  text,
  render,
  setRender,
}: ISideBarITem): JSX.Element {
  return (
    <S.ContainerSideBarItem
      onClick={() => (render && setRender ? setRender(render) : '')}
    >
      <p>{text}</p>
    </S.ContainerSideBarItem>
  )
}
