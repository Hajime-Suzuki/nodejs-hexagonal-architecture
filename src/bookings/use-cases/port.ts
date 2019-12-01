import { IBookingRepository } from 'driver-ports/booking-repository'
import { IHotelRepository } from 'driver-ports/hotel-repository'

export interface IBookRoomUseCaseDeps {
  hotelRepository: IHotelRepository
  bookingRepository: IBookingRepository
}

export type BookRoomUseCasePayload = {
  hotelId: string
  roomId: string
  date: string
}
