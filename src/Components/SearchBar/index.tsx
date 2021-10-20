import * as S from './style'
interface ISearcBar {
  valueSearch: string | number
  setValueSearch: React.Dispatch<React.SetStateAction<string | number>>
}
export function SearchBar({
  valueSearch,
  setValueSearch,
}: ISearcBar): JSX.Element {
  return (
    <S.ContainerSearchBar>
      <S.InputSearch
        placeholder='type id or name. . .'
        onChange={(e) => setValueSearch(e.currentTarget.value.trim())}
        value={valueSearch}
      />
    </S.ContainerSearchBar>
  )
}
