import { Hotel } from 'hotels/domain/hotel'

export interface IHotelRepository {
  findById(id: Hotel['id']): Promise<Hotel | null>
}
