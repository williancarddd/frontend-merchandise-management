import { IMerchandise } from '../../Interfaces/IMerchandise'
import { FormatDateHours } from '../../Utils/FormatDateHours'
import { MerchandiseDelete } from '../MerchandiseDelete'
import { MerchandiseUpdate } from '../MerchandiseUpdate'
import * as S from './style'
export function MerchandiseItem({
  data,
  deleteF,
  updateF,
}: {
  data: IMerchandise
  deleteF: (id?: number) => void
  updateF:
    | React.Dispatch<React.SetStateAction<string | JSX.Element>>
    | undefined
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
      <td style={{ display: 'flex', gap: '5px' }}>
        <MerchandiseDelete deleteFD={deleteF} id={data.id} />
        <S.UpdateMerchButton
          onClick={updateF ? () => updateF(<MerchandiseUpdate />) : undefined}
        >
          Update
        </S.UpdateMerchButton>
      </td>
    </tr>
  )
}
