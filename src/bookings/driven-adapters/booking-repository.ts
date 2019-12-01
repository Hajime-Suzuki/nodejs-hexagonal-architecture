import { BaseRepository } from '@utils/database/base-repository'
import { IBookingRepository } from 'driver-ports/booking-repository'
import { Booking } from '@bookings/domain/Booking'
import { BookingModel } from './booking-model'

export class BookingRepository extends BaseRepository<BookingModel, Booking>
  implements IBookingRepository {
  save = async (data: Booking) => {
    throw new Error('not implemented yet')
  }
  findOneById = async (bookingId: Booking['id']) => {
    throw new Error('not implemented yet')
  }

  findManyByUserId = async (userId: Booking['userId']) => {
    throw new Error('not implemented yet')
  }

  remove = async (bookingId: Booking['id']) => {
    throw new Error('not implemented')
  }
}
