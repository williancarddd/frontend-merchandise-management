import { useEffect, useState } from 'react'
import { IMerchandise } from '../../Interfaces/IMerchandise'
import { api_merchandise } from '../../Services/merchandiseApi'
import * as SG from '../../Styles/global.styles'
import { MerchandiseItem } from '../MerchandiseItem'
import { SearchBar } from '../SearchBar'
import * as S from './style'
export function Merchandises(): JSX.Element {
  const [merchandises, setMerchandises] = useState<IMerchandise[]>([{}])
  const [valueSearch, setValueSearch] = useState<string | number>('')
  useEffect(() => {
    handleMerchandises()
  }, [])
  async function handleMerchandises(): Promise<void> {
    try {
      const response = await api_merchandise.get<IMerchandise[]>('/merchandise')
      setMerchandises(response.data)
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      console.log(err.response.data.message)
    }
  }
  function handleDeleteMerch(id?: number): void {
    if (id) {
      const indexItem: number = merchandises.findIndex((e) => e.id == id)
      merchandises.splice(indexItem, 1)
      setMerchandises([...merchandises])
    }
  }
  const handleSearchMerch = (merch: IMerchandise[]) => {
    const filtred_merch = merch?.filter((merchItem) => {
      return (
        merchItem.id == Number(valueSearch) ||
        merchItem.name_merchandise
          ?.toLocaleLowerCase()
          .includes(String(valueSearch).toLocaleLowerCase())
      )
    })
    return filtred_merch
  }
  const filtered_merchs = handleSearchMerch(merchandises)
  return (
    <S.ContainerMerchandise>
      <SearchBar valueSearch={valueSearch} setValueSearch={setValueSearch} />
      <SG.Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity in stock</th>
            <th>Created date</th>
            <th>State</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {valueSearch ? (
            filtered_merchs.map((merch) => (
              <MerchandiseItem
                key={Math.random()}
                data={merch}
                deleteF={handleDeleteMerch}
              />
            ))
          ) : merchandises.length > 0 ? (
            merchandises.map((merch) => (
              <MerchandiseItem
                key={Math.random()}
                data={merch}
                deleteF={handleDeleteMerch}
              />
            ))
          ) : (
            <></>
          )}
        </tbody>
      </SG.Table>
    </S.ContainerMerchandise>
  )
}
