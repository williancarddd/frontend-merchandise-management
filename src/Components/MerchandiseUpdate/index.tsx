import { IMerchandise } from '../../Interfaces/IMerchandise'
import { useForm } from 'react-hook-form'
import * as S from './style'
import { useEffect, useState } from 'react'
import { IClassification } from '../../Interfaces/IClassifications'
import { api_merchandise } from '../../Services/merchandiseApi'
import { Merchandises } from '../Merchandises'

interface IMerchUpdate extends Omit<IMerchandise, 'Classification'> {
  ClassificationId?: number
}
interface IUpdateMerchProps {
  data: IMerchandise
  backFrame:
    | React.Dispatch<React.SetStateAction<string | JSX.Element>>
    | undefined
}
export function MerchandiseUpdate({
  data,
  backFrame,
}: IUpdateMerchProps): JSX.Element {
  const { register, handleSubmit } = useForm<IMerchUpdate>({
    defaultValues: { ...data, ClassificationId: data.ClassificationId },
  })

  const [classifications, setClassifications] = useState<IClassification[]>([
    {},
  ])
  const [classificationUniq, setClassificationUniq] = useState<number | string>(
    data.ClassificationId ? data.ClassificationId : 0
  )
  useEffect(() => {
    handleGetAllClassifications()
  }, [])

  async function teste(merch: IMerchUpdate) {
    try {
      await api_merchandise.patch<IMerchUpdate>(`merchandise/${data.id}`, merch)
      if (backFrame) backFrame(<Merchandises setRenderComp={backFrame} />)
    } catch (err) {
      console.log(err)
    }
  }
  async function handleGetAllClassifications() {
    try {
      const response_classifications = await api_merchandise.get<
        IClassification[]
      >('classifications')
      setClassifications(response_classifications.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <S.ContainerMerchandiseUpdate>
      <S.FormUpdate onSubmit={handleSubmit(teste)}>
        <S.ContainerInfo>
          name
          <S.InputUpdate {...register('name_merchandise')} />
        </S.ContainerInfo>

        <S.ContainerInfo>
          price
          <S.InputUpdate {...register('price_merchandise')} />
        </S.ContainerInfo>
        <S.ContainerInfo>
          quantity stock
          <S.InputUpdate
            type='number'
            {...register('quantity_stock_merchandise')}
          />
        </S.ContainerInfo>
        <S.ContainerInfo>
          classification
          <S.SelectUpdate
            value={classificationUniq}
            {...register('ClassificationId')}
            onChange={(e) => setClassificationUniq(e.target.value)}
          >
            {classifications.map((classification) => {
              return (
                <option key={Math.random()} value={classification.id}>
                  {classification.name_classification}
                </option>
              )
            })}
          </S.SelectUpdate>
        </S.ContainerInfo>
        <S.ContainerInfo>
          state
          <S.SelectUpdate {...register('state_merchandise')}>
            <option value='true'>Available</option>
            <option value='false'>Unavailable</option>
          </S.SelectUpdate>
        </S.ContainerInfo>
        <S.ContainerButton>
          <S.ConfirmUpdate>Confirm</S.ConfirmUpdate>
          <S.CancelUpdate
            onClick={() =>
              backFrame
                ? backFrame(<Merchandises setRenderComp={backFrame} />)
                : undefined
            }
          >
            Cancel
          </S.CancelUpdate>
        </S.ContainerButton>
      </S.FormUpdate>
    </S.ContainerMerchandiseUpdate>
  )
}
