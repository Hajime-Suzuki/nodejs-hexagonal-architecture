import { Booking } from '@bookings/domain/Booking'

type BookingId = Booking['id']
type UserId = Booking['userId']

export interface IBookingRepository {
  save(data: Booking): Promise<void>
  findOneById(bookingId: BookingId): Promise<Booking | null>
  findManyByUserId(userId: UserId): Promise<Booking[]>
  remove(bookingId: BookingId): Promise<void>
}
