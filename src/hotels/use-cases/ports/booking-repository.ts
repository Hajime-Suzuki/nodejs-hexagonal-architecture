import { Booking } from 'booking/domain/Booking'

type BookingId = Booking['id'] // bk_hotel_1$2019-12-12_room_1 <- PK$SK
type UserId = Booking['userId']

export interface IBookingRepository {
  save(data: Booking): Promise<void>
  findOneById(bookingId: BookingId): Promise<Booking | null>
  findManyByUserId(userId: UserId): Promise<Booking[]>
  remove(bookingId: BookingId): Promise<void>
}
