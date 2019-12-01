import { IBookingRepository } from '@hotels/use-cases/ports/booking-repository'
import { IHotelRepository } from '@hotels/use-cases/ports/hotel-repository'

export interface IBookRoomUseCaseDeps {
  hotelRepository: IHotelRepository
  bookingRepository: IBookingRepository
}
