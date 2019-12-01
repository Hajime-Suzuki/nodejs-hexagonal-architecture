import { Availability } from 'availabilities/domain/Availability'

export interface IAvailabilityRepository {
  exist(data: Availability): Promise<Availability | null>
  save(data: Availability): Promise<void>
  remove(data: Availability): Promise<void>
}
