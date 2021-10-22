import * as S from './style'
import { useForm } from 'react-hook-form'
import { IMerchandise } from '../../Interfaces/IMerchandise'
import { api_merchandise } from '../../Services/merchandiseApi'
import { useEffect, useState } from 'react'
import { IClassification } from '../../Interfaces/IClassifications'

interface ICreateMerchandise extends Omit<IMerchandise, 'Classification'> {
  ClassificationId?: number
}

export function MerchandiseCreate(): JSX.Element {
  const { handleSubmit, register } = useForm<ICreateMerchandise>({})
  const [classifications, setClassifications] = useState<IClassification[]>([
    {},
  ])
  async function handleCreateMerchandise(
    data: ICreateMerchandise
  ): Promise<void> {
    try {
      console.log(data)
      await api_merchandise.post<ICreateMerchandise>('/merchandise', data)
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      console.log(err.response.data)
    }
  }
  useEffect(() => {
    api_merchandise
      .get<IClassification[]>('/classifications')
      .then((data) => {
        setClassifications(data.data)
      })
      .catch(console.log)
  }, [setClassifications])
  return (
    <S.ContainerCreateMerchandise>
      <S.FormCreateMerchandise onSubmit={handleSubmit(handleCreateMerchandise)}>
        <S.LabelCreateMerch>
          name
          <S.InputCreateMerch
            {...register('name_merchandise', { required: true })}
          />
        </S.LabelCreateMerch>
        <S.LabelCreateMerch>
          state
          <S.SelectCreateMerch
            {...register('state_merchandise', { required: true })}
          >
            <option value='true'>Avaiable</option>
            <option value='false'>Unavaiable</option>
          </S.SelectCreateMerch>
        </S.LabelCreateMerch>
        <S.LabelCreateMerch>
          price
          <S.InputCreateMerch
            centerText={true}
            {...register('price_merchandise', { required: true })}
          />
        </S.LabelCreateMerch>
        <S.LabelCreateMerch>
          quantity stock
          <S.InputCreateMerch
            type='number'
            centerText={true}
            {...register('quantity_stock_merchandise', { required: true })}
          />
        </S.LabelCreateMerch>
        <S.LabelCreateMerch>
          classification
          <S.SelectCreateMerch
            {...register('ClassificationId', { required: true })}
          >
            {classifications.map((classfi) => (
              <option key={Math.random()} value={classfi.id}>
                {classfi.name_classification}
              </option>
            ))}
          </S.SelectCreateMerch>
        </S.LabelCreateMerch>
        <S.ButtonCreateMerchandise>CREATE</S.ButtonCreateMerchandise>
      </S.FormCreateMerchandise>
    </S.ContainerCreateMerchandise>
  )
}
