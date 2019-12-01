import { Hotel } from '@hotels/domain/Hotel'
import { IHotelRepository } from 'driver-ports/hotel-repository'

export interface FindHotelByIdUseCase {
  hotelRepository: Pick<IHotelRepository, 'findById'>
}

export type FindHotelByIdPayload = {
  id: Hotel['id']
}
