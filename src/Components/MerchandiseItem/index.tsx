import { IMerchandise } from '../../Interfaces/IMerchandise'
import { FormatDateHours } from '../../Utils/FormatDateHours'
import { MerchandiseDelete } from '../MerchandiseDelete'
import * as S from './style'
export function MerchandiseItem({
  data,
  deleteF,
}: {
  data: IMerchandise
  deleteF: (id?: number) => void
}): JSX.Element {
  const [date, hours] = FormatDateHours(data.createdAt)
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.name_merchandise}</td>
      <td>{data.price_merchandise}</td>
      <td>{data.quantity_stock_merchandise}</td>
      <td>{`${hours} | ${date}`}</td>
      <td>
        <S.StateMerch state={data.state_merchandise} />
      </td>
      <td>
        <MerchandiseDelete deleteFD={deleteF} id={data.id} />
      </td>
    </tr>
  )
}
