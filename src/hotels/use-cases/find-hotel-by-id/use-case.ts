import { FindHotelByIdPayload, FindHotelByIdUseCase } from './port'

export const findHotelByIdUseCase = (deps: FindHotelByIdUseCase) => async ({
  id,
}: FindHotelByIdPayload) => deps.hotelRepository.findById(id)
