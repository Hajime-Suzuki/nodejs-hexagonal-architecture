import { IBookingModel } from './booking-model'
import { Booking } from '@bookings/domain/Booking'

export const dbToBooking = (model: IBookingModel): Booking => {
  return {
    id: `${model.PK}:${model.SK}`,
    userId: model.PK.replace('bk_user', ''),
    hotelId: model.hotelId,
    roomId: model.roomId,
    roomNumber: model.roomNumber,
    checkInDate: model.checkInDate,
    checkOutDate: model.checkOutDate,
    option: model.option,
  }
}
