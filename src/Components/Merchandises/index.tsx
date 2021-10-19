import { useEffect, useState } from 'react'
import { IMerchandise } from '../../Interfaces/IMerchandise'
import { api_merchandise } from '../../Services/merchandiseApi'
import * as SG from '../../Styles/global.styles'
import { MerchandiseItem } from '../MerchandiseItem'
import * as S from './style'
export function Merchandises(): JSX.Element {
  const [merchandises, setMerchandises] = useState<IMerchandise[]>([{}])
  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
    (async () => {
      handleMerchandises()
    })()
  }, [])
  async function handleMerchandises() {
    try {
      const response = await api_merchandise.get<IMerchandise[]>('/merchandise')
      setMerchandises(response.data)
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      console.log(err.response.data.message)
    }
  }
  console.log(merchandises)
  return (
    <S.ContainerMerchandise>
      {/**search bar  */}
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
          {merchandises.length > 0
            ? merchandises.map((merch) => (
                <tr key={merch.id}>
                  <MerchandiseItem data={merch} />
                </tr>
              ))
            : ''}
        </tbody>
      </SG.Table>
    </S.ContainerMerchandise>
  )
}
