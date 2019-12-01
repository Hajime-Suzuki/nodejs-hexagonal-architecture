import { IHotelRepository } from '../ports/hotel-repository'
import { Hotel } from '@hotels/domain/Hotel'

export interface FindHotelByIdUseCase {
  hotelRepository: Pick<IHotelRepository, 'findById'>
}

export type FindHotelByIdPayload = {
  id: Hotel['id']
}
