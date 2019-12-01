import { attribute, hashKey, rangeKey, table } from '@aws/dynamodb-data-mapper-annotations'
import { dbConfig } from '@utils/database/config'
import { Hotel } from '@hotels/domain/Hotel'

type IHotelModel = Omit<Hotel, 'id' | 'type'> & { PK: string; SK: string }

@table(dbConfig.tableName)
export class HotelModel implements IHotelModel {
  @hashKey()
  PK: string

  @rangeKey()
  SK: 'hotel'

  @attribute()
  name: string

  @attribute()
  address: Address
}

type Address = {
  street: string
  city: string
  state: string
  postalCode: string
}
