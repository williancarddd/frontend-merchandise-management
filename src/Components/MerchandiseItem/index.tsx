import { IMerchandise } from '../../Interfaces/IMerchandise'

export function MerchandiseItem({ data }: { data: IMerchandise }): JSX.Element {
  return (
    <>
      <td>{data.id}</td>
      <td>{data.name_merchandise}</td>
      <td>{data.price_merchandise}</td>
      <td>{data.quantity_stock_merchandise}</td>
      <td>{data.createdAt}</td>
      <td>{data.state_merchandise}</td>
      <td>delete</td>
    </>
  )
}
