import { Hotel } from '@hotels/domain/Hotel'
import { hotelRepository } from '@hotels/driven-adapters/repository/hotel-repository'
import { response } from '@utils/lambda/method-decorators/response'
import { Params } from '@utils/lambda/parameter-decorators/path-params'
import { APIGatewayEvent } from 'aws-lambda'
import 'reflect-metadata'
import { FindHotelByIdUseCase } from './port'
import { findHotelByIdUseCase } from './use-case'

type PathParams = {
  id: Hotel['id']
}

class FindHotelByIdAdapter implements FindHotelByIdUseCase {
  constructor(public hotelRepository: FindHotelByIdUseCase['hotelRepository']) {}

  @response()
  async execute(@Params params: PathParams): Promise<{ hotel: Hotel | null }> {
    const hotel = await findHotelByIdUseCase({ hotelRepository: this.hotelRepository })({
      id: params.id,
    })
    return {
      hotel,
    }
  }
}

const adapter = new FindHotelByIdAdapter(hotelRepository)
export const handler = (e: APIGatewayEvent) => adapter.execute(e as any)
