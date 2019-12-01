import { HotelModel } from './hotel-model'
import { Hotel } from '@hotels/domain/Hotel'

export const dbModelToHotel = (
  { PK: _, SK: __, ...data }: HotelModel,
  deserializedPrimaryKey: { PK: string; SK: string },
): Hotel => {
  return {
    id: deserializedPrimaryKey.PK,
    type: deserializedPrimaryKey.SK,
    ...data,
  }
}
