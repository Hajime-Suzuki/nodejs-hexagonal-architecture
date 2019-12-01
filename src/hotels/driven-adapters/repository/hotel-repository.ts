import { DataMapper } from '@aws/dynamodb-data-mapper'
import { HotelModel } from './hotel-model'
import { dbModelToHotel } from './data-mapper'
import { BaseRepository } from '@utils/database/base-repository'
import { mapper } from '@utils/database/mapper'
import { Hotel } from '@hotels/domain/Hotel'
import { IHotelRepository } from '@hotels/use-cases/ports/hotel-repository'

type PrimaryKey = Pick<Hotel, 'id' | 'type'>

class HotelRepository extends BaseRepository<HotelModel, Hotel> implements IHotelRepository {
  private SK = 'hotel' as const

  constructor(mapper: DataMapper, Model: new () => HotelModel) {
    super(mapper, Model)
  }

  findById = async (id: PrimaryKey['id']): Promise<Hotel | null> => {
    const queryObj = this._createQuery({ where: this._toDbPrimaryKey({ id }) })
    const res = await this._safeGet(queryObj)
    return this._deserialize(res)
  }

  protected _deserialize = (data: HotelModel | null) => {
    if (!data) return null
    const { PK, SK } = data
    const deserializedPrimaryKey = this._fromDbPrimaryKey({ PK, SK })
    return dbModelToHotel(data, deserializedPrimaryKey)
  }

  protected _toDbPrimaryKey = (primaryKey: { id: PrimaryKey['id'] }) => ({
    PK: `hotel_${primaryKey.id}`,
    SK: this.SK,
  })

  protected _fromDbPrimaryKey = (dbPrimaryKey: Pick<HotelModel, 'PK' | 'SK'>) => ({
    PK: dbPrimaryKey.PK.replace('hotel_', ''),
    SK: dbPrimaryKey.SK,
  })
}

export const hotelRepository = new HotelRepository(mapper, HotelModel)
