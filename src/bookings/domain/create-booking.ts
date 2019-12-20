import { Booking } from './Booking'
import { Guards } from '@utils/guards'

export const createBooking = (input: Partial<Booking>) => {
  const payload = {
    userId: input.userId,
    hotelId: input.hotelId,
    roomId: input.roomId,
    checkInDate: input.checkInDate,
    checkOutDate: input.checkOutDate,
    roomNumber: input.roomNumber,
  }

  const emptyValues = Guards.isNotDefined(payload)

  if (emptyValues.length) {
    throw new Error(`${emptyValues.join(', ')} can not be empty`)
  }

  if (Guards.isValid(payload.checkInDate) || Guards.isValid(payload.checkOutDate)) {
    throw new Error('Invalid check in / check out date')
  }

  if (Guards.isBefore(payload.checkOutDate!, payload.checkInDate!)) {
    throw new Error('check out date cannot be before check in date')
  }

  return {
    ...input,
  } as Booking
}
