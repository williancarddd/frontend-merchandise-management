import { IClassification } from './IClassifications'

export interface IMerchandise {
  id?: number
  name_merchandise?: string
  photo_merchandise?: string | null
  state_merchandise?: boolean
  price_merchandise?: number
  quantity_stock_merchandise?: number
  ClassificationId?: number
  createdAt?: string
  updatedAt?: string
  Classification?: IClassification
}
