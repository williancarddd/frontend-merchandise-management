import * as S from './style'
import { api_merchandise } from '../../Services/merchandiseApi'
import Swal from 'sweetalert2'
interface IMerchDeleteProps {
  deleteFD: (id?: number) => void
  id?: number
}
export function MerchandiseDelete({
  deleteFD,
  id,
}: IMerchDeleteProps): JSX.Element {
  function handleDeleteItem(id?: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed && id) {
        Swal.fire('Deleted!', `Merchandise id ${id} deleted.`, 'success')
        try {
          await api_merchandise.delete(`/merchandise/${id}`)
          deleteFD(id)
        } catch (err) {
          console.log(err)
        }
      }
    })
  }
  return (
    <S.DeleteMerchButton onClick={() => handleDeleteItem(id)}>
      Delete
    </S.DeleteMerchButton>
  )
}
