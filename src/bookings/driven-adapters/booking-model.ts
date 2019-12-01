import { attribute, hashKey, rangeKey, table } from '@aws/dynamodb-data-mapper-annotations'
import { Booking } from '@bookings/domain/Booking'
import { dbConfig } from '@utils/database/config'

export type IBookingModel = Omit<Booking, 'id' | 'userId'> & { PK: string; SK: string }

@table(dbConfig.tableName)
export class BookingModel implements IBookingModel {
  @hashKey()
  PK: string // bk_user_1

  @rangeKey()
  SK: string // 2019-12-12 (checkInDate)

  @attribute()
  hotelId: string

  @attribute()
  roomId: string

  @attribute()
  roomNumber: string

  @attribute()
  checkInDate: string

  @attribute()
  checkOutDate: string

  @attribute()
  option: string
}
